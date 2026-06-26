const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/privacyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all occurrences of </div></div>" with </div>" or just remove trailing </div>
// Actually, it's safer to just replace any `</div>` that immediately precedes a `"` at the end of the line.
// Some lines have 5 unmatched closing divs: </div></div></div></div></div>"
content = content.replace(/(<\/div>)+(?=\")/g, '');

fs.writeFileSync(filePath, content);
console.log('Fixed privacyData.ts');
