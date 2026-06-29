import os
import datetime
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field
import gspread
import requests
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MedFliq Contact API")

frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url, "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Define the data model for validation
class ContactFormSubmit(BaseModel):
    firstName: str = Field(..., min_length=1, description="First Name is required")
    lastName: str
    email: EmailStr = Field(..., description="A valid email address is required")
    subject: str
    message: str = Field(..., min_length=1, description="Message cannot be empty")
    recaptchaToken: str = Field(..., description="reCAPTCHA token is required")

def get_google_sheet():
    try:
        # Fetch env vars
        sheet_id = os.getenv("GOOGLE_SHEET_ID")
        client_email = os.getenv("GOOGLE_CLIENT_EMAIL")
        private_key = os.getenv("GOOGLE_PRIVATE_KEY")

        if not sheet_id or not client_email or not private_key:
            raise ValueError("Google Sheets credentials are not fully configured in the environment.")

        # Handle properly formatted newlines in the private key from .env
        private_key = private_key.replace("\\n", "\n")

        credentials = Credentials.from_service_account_info(
            {
                "client_email": client_email,
                "private_key": private_key,
                "token_uri": "https://oauth2.googleapis.com/token",
            },
            scopes=[
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/drive"
            ]
        )
        client = gspread.authorize(credentials)
        
        spreadsheet = client.open_by_key(sheet_id)
        sheet_name = os.getenv("GOOGLE_SHEET_NAME")
        
        if sheet_name:
            try:
                sheet = spreadsheet.worksheet(sheet_name)
            except gspread.exceptions.WorksheetNotFound:
                print(f"Warning: Worksheet '{sheet_name}' not found. Falling back to the first sheet.")
                sheet = spreadsheet.sheet1
        else:
            sheet = spreadsheet.sheet1
            
        return sheet
    except Exception as e:
        print(f"Error authenticating with Google Sheets: {e}")
        return None

@app.post("/api/contact")
async def submit_contact_form(data: ContactFormSubmit):
    try:
        # Verify reCAPTCHA
        recaptcha_secret = os.getenv("RECAPTCHA_SECRET_KEY")
        if recaptcha_secret:
            verify_url = "https://www.google.com/recaptcha/api/siteverify"
            payload = {
                "secret": recaptcha_secret,
                "response": data.recaptchaToken
            }
            response = requests.post(verify_url, data=payload)
            result = response.json()
            if not result.get("success"):
                raise HTTPException(status_code=400, detail="reCAPTCHA verification failed. Please try again.")

        sheet = get_google_sheet()
        if not sheet:
            # If the backend is not configured correctly, return a 500 error
            raise HTTPException(status_code=500, detail="Server configuration error. Cannot connect to database.")

        # Prepare the row data
        timestamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
        
        row = [
            timestamp,
            data.firstName,
            data.lastName,
            data.email,
            data.subject,
            data.message
        ]

        # Append to the Google Sheet
        sheet.append_row(row)

        return {
            "success": True,
            "message": "Message submitted successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error appending row to Google Sheets: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit the form. Please try again later.")
