let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').innerText = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStopBtn').innerText = 'Stop';
    }

    isRunning = !isRunning;
}
function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;
    document.getElementById('display').innerText='00:00:00';
    document.getElementById('startStopBtn').innerText = 'Start';
    clearLaps();
}


function updateDisplay() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function addLap() {
    const lapList = document.getElementById('lapList');
    const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
}

function clearLaps() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
}
