const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.scss')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const newContent = content
        .replace(/108,\s*99,\s*255/g, '37, 99, 235')
        .replace(/0,\s*212,\s*170/g, '14, 165, 233');
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

replaceInDir('d:/portfolio/scss');
