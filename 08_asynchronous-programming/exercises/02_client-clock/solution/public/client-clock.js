var tickTack = document.getElementById('tick-tack');
setInterval(function () {
    if (tickTack.innerText === 'tick') {
        tickTack.innerText = 'tack';
    }
    else {
        tickTack.innerText = 'tick';
    }
}, 1000);
