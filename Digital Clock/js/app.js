let hourElement = document.getElementById("hour");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let ampmElement = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? `0${h}` : h
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    let ampm = "AM";
    if (h > 12) {
        h = h - 12
        ampm = "PM";
    }

    hourElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement.innerText = ampm;
}

setInterval(() => {
    updateClock();
}, 1000);
