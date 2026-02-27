// generate-index.js
// Script Node.js pour générer index.json pour blogs et galerie

const fs = require('fs');
const path = require('path');

function generateIndex(dir, output) {
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'));
  fs.writeFileSync(output, JSON.stringify(files, null, 2));
  console.log(`Index généré pour ${dir}`);
}

generateIndex(
  path.join(__dirname, 'content/blogs'),
  path.join(__dirname, 'content/blogs/index.json')
);
generateIndex(
  path.join(__dirname, 'images/uploads/galerie'),
  path.join(__dirname, 'images/uploads/galerie/index.json')
);
