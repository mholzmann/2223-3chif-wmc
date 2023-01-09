import { writeFile } from 'fs';

const fileName: string = 'hello.txt';
const data: string = 'hello node';

writeFile(fileName, data, (err) => {
    if (err !== null) {
        throw err;
    }
    console.log(`wrote ${fileName} successfully`);
});