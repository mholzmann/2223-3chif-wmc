import { writeFile } from 'fs/promises';
import { Person } from './person';

const person: Person = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 37,
	hasDrivingLicense: true
};

savePerson();

async function savePerson() {
    try {
        // \t is the escape sequence for a horizontal tab
        const jsonString = JSON.stringify(person, null, '\t');
        await writeFile('person.json', jsonString);
        console.log('file written successfully');
    } catch (err: any) {
        console.error(err.message);
    }
}