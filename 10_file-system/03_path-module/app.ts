import { readFile } from 'fs';
import { join } from 'path';

// only works, if app is executed in the directory of 'hello.txt'
const fileName: string = 'hello.txt';
readFile(fileName, 'utf8', (err, data) => {
    if (err !== null) {
        throw err;
    }
    console.log(`${fileName} -> ${data}`);
});

// always works, because __dirname is the absolute path of the current module
// with join() you don't need to care about the platform-specific path separator ('/' or '\')
const filePath: string = join(__dirname, 'hello.txt');
readFile(filePath, 'utf8', (err, data) => {
    if (err !== null) {
        throw err;
    }
    console.log(`${filePath} -> ${data}`);
});