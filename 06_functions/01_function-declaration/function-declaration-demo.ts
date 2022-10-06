function hello(name: string): void {
    console.log(`Hello ${name}!`);
}

const hi = function(name: string): void {
    console.log(`Hi ${name}.`);
}

hello("John");
hi("Jane");

console.log('-----------------------');

// a 'higher order function' takes another function as an argument
function chatWithTom(greet: (name: string) => void) {
    greet("Tom");
    console.log("How are you?");
}

chatWithTom(hello);
chatWithTom(hi);