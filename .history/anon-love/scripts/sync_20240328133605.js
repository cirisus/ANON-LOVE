const fs = require('fs');

const sourceFile = './index.html';
const targetFile = './anon-love/src/lib/About/index.html';

fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file from disk: ${err}`);
    } else {
        fs.writeFile(targetFile, data, (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
            }
        });
    }
});