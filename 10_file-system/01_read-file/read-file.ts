import { readFile } from 'fs';

const fileName: string = 'hello.txt';

readFile(fileName, 'utf8', (err, data) => {
    if (err !== null) {
        throw err;
    }
    console.log("read file successfully");
    console.log(data);
});