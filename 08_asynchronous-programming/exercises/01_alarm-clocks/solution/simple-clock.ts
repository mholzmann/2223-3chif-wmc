let timeout: number = Number(process.argv[2]);
if (isNaN(timeout)) {
    timeout = 10;
}
let tick: boolean = true;
let runtime: number = 0;

function tickOrTack(tick: boolean): void {
    if (tick) {
        console.log('tick');
    } else {
        console.log('tack');
    }
}

const timer = setInterval(function () {
    tickOrTack(tick);
    tick = !tick;
    runtime++;
    if (runtime === timeout) {
        clearInterval(timer);
        console.log('Ring! Ring! Ring!');
    }
}, 1000);

console.log(`Alarm clock will ring in ${timeout} seconds...`);