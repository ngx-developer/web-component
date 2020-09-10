const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular-webcomponents/runtime-es5.js',
    './dist/angular-webcomponents/polyfills-es5.js',
    './dist/angular-webcomponents/scripts.js',
    './dist/angular-webcomponents/main-es5.js',
  ]
  const filesES2015 = [
    './dist/angular-webcomponents/runtime-es2015.js',
    './dist/angular-webcomponents/polyfills-es2015.js',
    './dist/angular-webcomponents/scripts.js',
    './dist/angular-webcomponents/main-es2015.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements-es5.js');
  await concat(filesES2015, 'elements/elements-es2015.js');
  await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
  await fs.copy('./dist/angular-elements/assets/', 'elements/assets/')
})()

