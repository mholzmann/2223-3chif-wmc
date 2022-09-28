// run 'npm i --save-dev @types/node' for installing the type definitions for node

// the built-in array 'process.argv' contains the cli arguments
// - 1st/2nd element: paths
// - from 3rd element: command-line arguments
console.log(process.argv);

// for convenience you can copy the cli arguments to a new array
const args: string[] = process.argv.slice(2);

console.log(`Hello ${args[0]} ${args[1]}`);
// output: Hello John Smith (if app was started with 'node cli-arguments-demo.js John Smith')