// With promises you can avoid the 'callback hell' (see merge-with-callbacks.ts).
// The keywords 'async' and 'await' make the usage of promises more comfortable.

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const path1 = join(__dirname, 'files', 'part1.txt')
const path2 = join(__dirname, 'files', 'part2.txt')
const pathMerged = join(__dirname, 'files', 'merged-with-promises.txt')

mergeFiles();

console.log('\n*** could do something else meanwhile ***\n');

async function mergeFiles() {
    try {
        console.log('reading part1.txt ...');
        let text = await readFile(path1, 'utf8');
        console.log('read file successfully');

        console.log('reading part2.txt ...');
        text += await readFile(path2, 'utf8');
        console.log('read file successfully');

        console.log('writing merged file ...');
        await writeFile(pathMerged, text);
        console.log('wrote file successfully');
    } catch (err: any) {
        console.error(err.message);
    }
}