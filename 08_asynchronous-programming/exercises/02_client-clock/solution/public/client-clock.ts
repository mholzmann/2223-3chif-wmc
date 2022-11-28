const tickTack = <HTMLHeadingElement> document.getElementById('tick-tack');

setInterval(() => {
    if (tickTack.innerText === 'tick') {
        tickTack.innerText = 'tack';
    } else {
        tickTack.innerText = 'tick';
    }
}, 1000);