let count: number = 1;

// setInterval() returns a timer which identifies the interval
const timer = setInterval(() => console.log(count++), 1000);

setTimeout(() => {
    // the timer can be used for stopping the interval
    clearInterval(timer);
}, 5500);

// output: 1, 2, 3, 4, 5 (one number per second)