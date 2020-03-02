const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/counter-controls-element/runtime-es2015.js',
        './dist/counter-controls-element/polyfills-es2015.js',
        './dist/counter-controls-element/main-es2015.js'
    ];
    await concat(files, './projects/demo-app/src/assets/counter-controls-element.js');

    //await fs.copyFile('./dist/counterDumbComponent-elements/styles.css', 'elements/styles.css')
    //await fs.copy('./dist/fooo-elements/assets/', 'elements/assets/' )

}
concatenate();
