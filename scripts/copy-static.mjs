import {cp,mkdir} from 'node:fs/promises';
const items=['manifest.json','src/settings/settings.html','src/settings/settings.css','src/popup/popup.html','src/popup/popup.css','src/content/content-style.css','src/assets','src/themes'];
await mkdir('dist',{recursive:true});
for (const item of items){
 const out=item==='manifest.json'?'dist/manifest.json':item.replace(/^src\//,'dist/');
 await cp(item,out,{recursive:true,force:true});
}
console.log('Static extension files copied to dist/');
