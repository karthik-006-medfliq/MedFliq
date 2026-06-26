## Approval Workflow Rule

Whenever the user asks to create, modify, fix, or remove anything in this project, you must first show a change plan and wait for approval. Do not code immediately.

Before coding, always provide the plan exactly in this format:

1. Understanding of my request
- Explain what the user asked you to do in simple terms.
- Mention the exact page/section/component affected.

2. Files you will create
Show files in this format:
CREATE:
* path/to/file.tsx — reason
If no files will be created, write:
CREATE:
* None

3. Files you will edit
Show files in this format:
EDIT:
* path/to/file.tsx — reason
If no files will be edited, write:
EDIT:
* None

4. Files you will not touch
Show important protected files in this format:
DO NOT TOUCH:
* path/to/file.tsx
Only list the files that are relevant to protecting the current work.

5. Exact changes planned
Explain the exact changes you will make:
- layout changes
- style changes
- animation changes
- routing changes
- component changes
- asset changes
- import/export changes
Do not be vague.

6. Risk level
Mention one:
- Low risk: small isolated style/import fix
- Medium risk: section/component change
- High risk: routing/global layout/background change

7. Revert plan
Before coding, explain how the change can be reverted in this format:
REVERT PLAN:
* If the change fails, restore these files:
  * path/to/file.tsx
* Revert by removing the added component/import/classes.
* No unrelated files should need reverting.

8. Approval required
End every plan with:
"Waiting for your approval before coding."

### Post-Approval Rules:
* Do not edit files before approval.
* Do not touch unrelated files.
* Do not refactor unless explicitly asked.
* Do not rename files unless approved.
* Do not install packages unless approved.
* Do not change existing working sections unless mentioned.
* After approval, make only the listed changes.
* After coding, show the final changed files list.
* After coding, explain what was changed.
* After coding, tell the user how to revert the exact change.
* After coding, confirm whether `npm run build` passes.
