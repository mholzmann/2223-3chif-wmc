// an object consists of key-value pairs
const john = {
    firstName: "John",
    lastName: "Smith",
    age: 27,
    female: false
}

console.log(john);

// you can access values with dot notation
john.lastName = "Doe";
console.log(john.firstName + " " + john.lastName); // output: John Doe

// you can also access values with bracket notation
console.log(john["age"]);