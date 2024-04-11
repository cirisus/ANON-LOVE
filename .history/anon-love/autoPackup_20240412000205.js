import chokidar from 'chokidar';
import { exec } from 'child_process';

let changeCount = 0;

chokidar.watch('.').on('change', (event, path) => {
    changeCount++;
    if (changeCount % 3 === 0) {
        exec('npm run build', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }
});