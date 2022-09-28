// you can create arrays with hte new keyword
const empty1: string[] = new Array();       
const meals = new Array('spaghetti', 'pizza', 'chips');
console.log(meals);

console.log('---------------------------------------------------');

// but you should prefer array literal syntax
const empty2: string[] = [];    
const hobbies = ['running', 'cooking', 'reading', 'travelling'];

// you can copy the whole array or just a part
const allHobbies = hobbies.slice();
const someHobbies = hobbies.slice(1, 3);
console.log(allHobbies);    // output: ['running', 'cooking', 'reading', 'travelling']
console.log(someHobbies);   // output: ['cooking', 'reading']

console.log('---------------------------------------------------');

// you can add elements
hobbies.push('sleeping');

// you can remove elements
const removedHobbies = hobbies.splice(1, 2);

console.log(hobbies);        // output: ['running', 'travelling', 'sleeping']
console.log(removedHobbies); // output: ['cooking', 'reading']