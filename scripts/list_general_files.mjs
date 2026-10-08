import fs from 'fs';
import path from 'path';

const baseDir = path.join('public', 'images', 'alloroots');
const filesInGeneral = fs.readdirSync(path.join(baseDir, 'general'));

console.log(`Files in general (${filesInGeneral.length}):`);
filesInGeneral.forEach(f => {
  const stat = fs.statSync(path.join(baseDir, 'general', f));
  console.log(` - ${f} (${stat.size} bytes)`);
});
