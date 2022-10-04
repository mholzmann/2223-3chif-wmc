# Arrays

## JavaScript Arrays

- JavaScript arrays aren't [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) but are instead `Array` objects.

- JavaScript arrays can contain a mix of different data types and are resizable:

  ```JavaScript
  let myArray = [1, 'hello', true];
  myArray.push('world'); 
  console.log(myArray); // output: [1, 'hello', true, 'world']
  ```

<!---->

- JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering): 

  ```javascript
  console.log(myArray[1]); // output: hello
  console.log(myArray[myArray.length-1]); // output: world
  ```

- JavaScript [array-copy operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array) create [shallow copies](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy):

  ```javascript
  let objects = [new Object(), new Object()];
  let objectsCopy = Array.from(objects);
  console.log(objects[0] === objectsCopy[0]); // output: true
  ```

## TypeScript Arrays

- To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`: 

  ```typescript
  let nums: number[] = [1, 2, 3];
  ```

- The syntax above works for any type (e.g. `string[]` is an array of strings, and so on). 

- You may also see following syntax instead of `number[]`:

  ```typescript
  let moreNums: Array<number> = [4, 5, 6];
  ```



