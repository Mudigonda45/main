// JavaScript to toggle visibility of instructions
//function toggleInstructions(craftId) {
  //  var craft = document.getElementById(craftId);
    ///craft.classList.toggle("hidden");
//}
// script.js
let timer;
let isRunning = false;
let seconds = 0;

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    document.getElementById('timer-display').textContent = formatTime(seconds);
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
        isRunning = true;
    }
});



document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateTimerDisplay();
});

