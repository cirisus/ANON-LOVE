import { readFile, writeFile } from 'fs';

const sourceFile = './index.html';
const targetFile = './anon-love/src/libAbout/index.html';

readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file from disk: ${err}`);
    } else {
        writeFile(targetFile, data, (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
            }
        });
    }
});