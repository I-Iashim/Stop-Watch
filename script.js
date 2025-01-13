
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let timeDisplay = document.getElementById('time-display');

let interval;
let running = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function formatTime() {
    let formattedMilliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedHours = hours < 10 ? '0' + hours : hours;
    timeDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function startStopwatch() {
    if (!running) {
        interval = setInterval(function () {
            milliseconds += 1; // Increment by 10 milliseconds
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }
            formatTime();
        }, 10); // Update every 10 milliseconds
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    formatTime();
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
