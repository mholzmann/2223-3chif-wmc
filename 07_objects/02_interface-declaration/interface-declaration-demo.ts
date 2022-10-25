// you can name an object type by using an interface
// the name of an interface always beginns with a capital letter
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    female?: boolean;
}

const jim: Person = {
    firstName: 'Jim',
    lastName: 'Smith',
    age: 27,
    female: false
};

console.log(jim);

// also works, because 'female' is an optional property
const jane: Person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 31
};

console.log(jane);

const tom = {
    firstName: 'Tom',
    lastName: 'Snow',
    age: 16,
    female: false,
    hobbies: ['tennis', 'soccer', 'cooking']
};

// also works because an object is allowed to have additional properties
const person: Person = tom;
console.log(person);