// primitive type 'boolean'
let isFullAge: boolean = false;
isFullAge = true;
// isFullAge = "yes";   // not possible due to compile-time error

// primitive type 'number'
let credit: number = 700;
credit += 5.6;

// primitive type 'string'
let fullName: string = "Jonathan Smith";

// for the beginning: always use type annotations!
let indexOfBlank: number = fullName.indexOf(" ");
let firstName: string = fullName.slice(0, indexOfBlank);
console.log(firstName);