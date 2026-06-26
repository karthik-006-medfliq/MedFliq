const fs = require('fs');
const filePath = 'C:\\Users\\akart\\OneDrive\\Desktop\\MED\\medfliq-clone\\src\\data\\privacyData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const footerIndex = content.indexOf('</section><footer');
if (footerIndex !== -1) {
  // We need to find the end of the HTML string. The HTML string is inside double quotes.
  // We just remove from `<footer` up to `</footer>` or we can just replace everything from `</section><footer` to the end of that HTML string.
  // Actually, since it's the last section's HTML, we can just replace everything from `</section><footer` to the end of the string literal.
  const endOfHtmlIndex = content.indexOf('"\n  },\n];', footerIndex);
  if (endOfHtmlIndex !== -1) {
    const fixedContent = content.substring(0, footerIndex) + content.substring(endOfHtmlIndex);
    fs.writeFileSync(filePath, fixedContent);
    console.log('Fixed privacyData.ts by removing footer from Section 14');
  } else {
    console.log('Could not find end of string literal');
  }
} else {
  console.log('Could not find footer tag');
}
