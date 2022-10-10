# Functions

## Function declaration

- In **JavaScript** you can declare a function in two ways:

  ```javascript [0|1-3|5-7]
  function add(x, y) {
  	return x + y;
  }
  
  let myAdd = function(x, y) {
  	return x + y;
  }
  ```
  <!---->

- **TypeScript** allows you to ... 

  - add types to each of the parameters 
  - add a return type to the function itself

  ```typescript [1-3|5-7]
  function add(x: number, y: number): number {
  	return x + y;
  }
  
  let myAdd = function(x: number, y: number): number {
  	return x + y;
  }
  ```

<!---->

- **TypeScript** can figure out the return type by looking at the return statements, so you can omit it:

  ```typescript [0|1-3|5-7]
  function add(x: number, y: number) {
      return x + y;
  }
  
  let myAdd = function(x: number, y: number) {
      return x + y;
  }
  ```

## Functions are objects

- In **JavaScript** and **TypeScript**, functions are treated like objects
- As a result a function can be ...
  - ... passed as an argument to another function
  - ... can be returned by another function
  - ... can be assigned to a variable

## Higher-order functions

- Functions which have a function parameter or return a function

- The array method `find()` is such a higher-order function

  ```typescript [0|1-3|5|7|9]
  function isBiggerThanTen(x: number): boolean {
      return x > 10;
  }
  
  const array: number[] = [5, 12, 8, 130, 44];
  
  const found: number = array.find(isBiggerThanTen);
  
  console.log(found); // output: 12
  ```

<!---->

> ❗**Please note:** 
> - In `array.find(isBiggerThanTen)` the function argument  **has no** parentheses
> - That's because you don't call `isBiggerThanTen()`
> - Instead you pass a function reference to `find()`
> - `find()` calls `isBiggerThenTen()` while searching 

## Anonymous functions

- A function argument can be passed, without giving it a name

  ```typescript [0|3-5]
  const array: number[] = [5, 12, 8, 130, 44];
  
  const found: number = array.find(function (x) {
      return x > 10;
  });
  
  console.log(found); // output: 12
  ```

> ❗__Please note:__ 
>
> - The data type of the parameter `x` can be omitted.
> - That's because `array` has the type `number[]` and so `x` must be a `number`

## Arrow functions

- _Arrow function expressions_ are a special syntax for declaring a function
  - in other languages they are called _lambda expressions_
  
- They are often used as _anonymous functions_:

  ```typescript [0|3-5]
  const array: number[] = [5, 12, 8, 130, 44];
  
  const found: number = array.find((x) => {
      return x > 10;
  });
  
  console.log(found); // output: 12
  ```

<!---->

- Some _arrow functions_ can be shortened:

  - if there is a single argument, you can omit the parentheses

  - if the _arrow function_ contains only one line of code, you can omit the curly braces and the `return` keyword


- So the *arrow function* from the last example can be simplified:

  ```typescript [0|3]
  const array: number[] = [5, 12, 8, 130, 44];
  
  const found: number = array.find(x => x > 10);
  
  console.log(found); // output: 12
  ```



