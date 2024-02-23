let display = document.querySelector('.display');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');
let intervalId;

let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        let hoursFormatted = hours < 10 ? '0' + hours : hours;
        let minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
        let secondsFormatted = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}