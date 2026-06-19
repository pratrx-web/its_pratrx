import {cp,mkdir,rm} from 'node:fs/promises';

const staticItems=[
  ['manifest.json','dist/manifest.json'],
  ['src/settings/settings.html','dist/settings/settings.html'],
  ['src/settings/settings.css','dist/settings/settings.css'],
  ['src/popup/popup.html','dist/popup/popup.html'],
  ['src/popup/popup.css','dist/popup/popup.css'],
  ['src/content/content-style.css','dist/content/content-style.css'],
  ['src/assets','dist/assets'],
  ['src/themes','dist/themes'],
  ['src/widgets','dist/widgets']
];

await mkdir('dist',{recursive:true});
for (const [src,dest] of staticItems) await cp(src,dest,{recursive:true,force:true});

// The repository root is also loadable as an unpacked extension. Chrome/Edge
// resolve paths relative to manifest.json, so mirror the compiled runtime files
// beside the root manifest as well as in dist/.
for (const dir of ['background','content','modules','components','lib','assets','themes','widgets','storage','settings','popup']) {
  await rm(dir,{recursive:true,force:true});
  await cp(`dist/${dir}`,dir,{recursive:true,force:true});
}

console.log('Static extension files copied to dist/ and root loadable extension folders.');
