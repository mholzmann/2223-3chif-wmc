// run following command to compile to JavaScript
// tsc hello.ts --target es6

// afterwards run following command to execute the program
// node hello.js

const message: string = "HELLO WORLD";
const lowerCase: string = message.toLocaleLowerCase();

console.log(lowerCase);