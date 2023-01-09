import { readFile } from 'fs/promises';
import { Person } from './person';

readPerson();

async function readPerson() {
    try {
        const jsonString: string = await readFile('person.json', 'utf8');
        const person: Person = JSON.parse(jsonString);
        console.log(person);
        if (typeof person.age !== "number") {
            throw "age is not a number";
        }
        console.log(person.age + 1);
        
    } catch (error) {
        console.log(error);
    }
}

