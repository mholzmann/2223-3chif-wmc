export { };

let timeout: number = Number(process.argv[2]);
if (isNaN(timeout)) {
    timeout = 10;
}

function tick() {
    console.log('tick');
}

function tack() {
    console.log('tack');
}

const tackTimer = setInterval(tack, 2000);
let tickTimer;

setTimeout(function () {
    tick();
    tickTimer = setInterval(tick, 2000)
}, 1000);

setTimeout(function () {
    clearInterval(tickTimer);
    clearInterval(tackTimer);
    console.log('Ring! Ring! Ring!');
}, timeout * 1000 + 100);

console.log(`Alarm clock will ring in ${timeout} seconds...`);