interface Person {
    firstName: string;
    lastName: string;
    age: number;
    female: boolean;
}

const tim: Person = {
    firstName: "Tim",
    lastName: "Smith",
    age: 27,
    female: false
};

// you can iterate over all keys with for-in-loop
console.log("--------------------")
console.log("keys of tim:")
for (const key in tim) {
    console.log("- " + key);
}

// you can use for-in-loop and bracket notation to iterate over all values
console.log("--------------------")
console.log("values of tim:")
for (const key in tim) {
    console.log("- " + tim[key]);
}