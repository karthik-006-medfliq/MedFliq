const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/privacyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/(<\/div>)+(?=\")/g, '');

fs.writeFileSync(filePath, content);
console.log('Fixed privacyData.ts');
