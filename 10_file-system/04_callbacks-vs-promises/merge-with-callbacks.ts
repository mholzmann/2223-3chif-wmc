import { readFile, writeFile } from 'fs';
import { join } from 'path';

// Welcome in the 'callback hell' ...
console.log('reading part1.txt ...');
const path1 = join(__dirname, 'files', 'part1.txt');
readFile(path1, 'utf8', (err, data) => {
    if (err !== null) {
        console.error(err.message);
        return;
    }
    let text = data;
    console.log('read file successfully');

    console.log('reading part2.txt ...');
    const path2 = join(__dirname, 'files', 'part2.txt');
    readFile(path2, 'utf8', (err, data) => {
        if (err !== null) {
            console.error(err.message);
            return;
        }
        text += data;
        console.log('read file successfully');

        console.log('writing file ...');
        const pathMerged = join(__dirname, 'files', 'merged-with-callbacks.txt');
        writeFile(pathMerged, text, (err) => {
            if (err !== null) {
                console.error(err.message);
                return;
            }
            console.log('wrote file successfully');            
        });
    });
});

console.log('\n*** could do something else meanwhile ***\n');