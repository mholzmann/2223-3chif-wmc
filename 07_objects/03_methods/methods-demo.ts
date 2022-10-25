interface Person {
    firstName: string;
    lastName: string;
    age: number;
    female?: boolean;
}

// you can extend an existing interface
// you can add methods to the interface declaration
interface NamedPerson extends Person {
    getName: () => string;
}

// you have to use "this" keyword, if you want to access a property within a method
const jill: NamedPerson = {
    firstName: "Jill",
    lastName: "Smith",
    age: 44,
    getName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(jill.getName());

// each object has its own method implementation
const jack: NamedPerson = {
    firstName: "Jack",
    lastName: "Doe",
    age: 55,
    getName: function() {
        return `${this.lastName} ${this.firstName}`;
    }
};

console.log(jack.getName());