/* eslint-disable prefer-const */
//- scss injection
import "./styles.scss";

//ui selector variables
let timerDisplay = document.querySelector(`.time-display`);
let toggleButton = document.querySelector(`.toggle-timer`);
let resetButton = document.querySelector(`.reset-timer`);

// declare initial time variables
let time = 0;
let seconds = 0;
let minutes = 0;

// declare initial isState states
let isInitialState = toggleButton.classList.contains(`initial-state`);
let isRunning = toggleButton.classList.contains(`running`);
let isPaused = toggleButton.classList.contains(`paused`);

//- button functions
// toggle time between 3 states of initial, running, and paused
function toggleTimer() {
  switch (true) {
    // if in intial state, start timer to run state, remove initial state, and log start time
    case isInitialState:
      toggleButton.classList.add(`running`);
      toggleButton.classList.remove(`initial-state`);
      toggleButton.textContent = `Pause`;

      break;

    // if timer is currently running, pause timer, remove running, and save time to variable
    case isRunning:
      toggleButton.classList.add(`paused`);
      toggleButton.classList.remove(`running`);
      toggleButton.textContent = `Start`;

      break;

    // if timer is currently paused then run, remove paused and start timer
    case isPaused:
      toggleButton.classList.add(`running`);
      toggleButton.classList.remove(`paused`);
      toggleButton.textContent = `Pause`;

      break;

    default:
  }
}

// remove other states and make initial state again
function resetTimer() {
  toggleButton.classList.remove(`running`);
  toggleButton.classList.remove(`paused`);
  toggleButton.classList.add(`initial-state`);
  time = 0;
  toggleButton.textContent = `Start`;
}

//- button event listeners
toggleButton.addEventListener(`click`, toggleTimer);
resetButton.addEventListener(`click`, resetTimer);

//- update time
function runningTimer() {
  // update state values
  isInitialState = toggleButton.classList.contains(`initial-state`);
  isRunning = toggleButton.classList.contains(`running`);
  isPaused = toggleButton.classList.contains(`paused`);

  //increment time if running
  if (isRunning) {
    ++time;
  }
  seconds = Math.floor(time % 60);
  minutes = Math.floor(time / 60);

  let content = `${minutes}:${seconds}`;

  timerDisplay.innerHTML = content;
}

function updateTimeDisplay() {
  setInterval(runningTimer, 1000);
}

updateTimeDisplay();
