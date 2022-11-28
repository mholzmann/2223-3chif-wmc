/*
* problem: callback3 is executed too late (>= 7 s after program start)
* reason: callback2 blocks the thread for 5 s (remember: Node.js is single-threaded!)
* conclusion: blocking (=synchronous) code must be avoided in Node.js

* So we offload tasks to the operating system (os) whenever possible (asynchronous code):
* - Since most modern systems are multi-threaded, they can handle multiple tasks at the same time.
* - When one of those tasks completes, the operating system informs Node.js. 
* - Node.js then invokes the given callback function of your application.
*/

setTimeout(callback1, 1000);
setTimeout(callback2, 2000);
setTimeout(callback3, 3000);


function callback1(): void {
    console.log('callback 1 started');
    console.log('callback 1 finished');
}

function callback2(): void {
    console.log('callback 2 started ');
    console.log('callback 2 is working ...');
    block(5000);
    console.log('callback 2 finished');
}

function callback3(): void {
    console.log('callback 3 started');
    console.log('callback 3 finished');
}

function block(duration: number): void {
    const startTime = Date.now();
    while(Date.now() < startTime + duration){
        // do nothing
    }
}