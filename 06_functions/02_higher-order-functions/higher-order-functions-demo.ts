// printNumbers() is a higher order function, because it takes another function as an argument
// it accepts any function, which receives a number and returns a boolean
function printNumbers(test: (num: number) => boolean) {
    for (let i = 0; i < 10; i++) {
        if (test(i)) {
            console.log(i);
        }
    }
}

// isEven is an appropriate argument for printNumbers()
function isEven(num: number): boolean {
    return num % 2 === 0;
}

printNumbers(isEven); // output: 0, 2, 4, 8

console.log('------------------------');

// isOdd is an appropriate argument for printNumbers()
function isOdd(num: number): boolean {
    return num % 2 === 1;
}

printNumbers(isOdd); // output: 1, 3, 5, 7, 9

console.log('------------------------');

// you can also pass an anonymous function,
// which is a function expression without a name
printNumbers(function (num) {
    return num % 3 === 0;
});
// output: 0, 3, 6, 9