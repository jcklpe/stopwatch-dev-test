/* eslint-disable prefer-const */
//- scss injection
import "./styles.scss";

//ui selector variables
let timerDisplay = document.querySelector(`.time-display`);
let toggleButton = document.querySelector(`.toggle-timer`);
let resetButton = document.querySelector(`.reset-timer`);

// define starting time variables
let startTime = 0;
let latestTime = 0;
let savedTime = 0;
let incrementedTime = 0;
let seconds = 0;

let isInitialState = toggleButton.classList.contains(`initial-state`);
let isRunning = toggleButton.classList.contains(`running`);
let isPaused = toggleButton.classList.contains(`paused`);

function testFunction() {
  // console.log(`
  //     startTime:             ${startTime}
  //     savedTime:             ${savedTime}
  //     total elapsed time:    ${latestTime - startTime}
  //     latestTime:            ${latestTime}
  //     Date.getTime:          ${new Date().getTime()}`);
}

//- button functions
// toggle time between 3 states of initial, running, and paused
function toggleTimer() {
  //latestTime = new Date().getTime();
  switch (true) {
    // if in intial state, run timer, remove initial state, and log start time
    case isInitialState:
      toggleButton.classList.add(`running`);
      toggleButton.classList.remove(`initial-state`);
      toggleButton.textContent = `Pause`;
      startTime = new Date().getTime();
      console.log(`was initial now running`);
      testFunction();

      break;

    // if timer is currently running, pause timer, remove running, and save time to variable
    case isRunning:
      toggleButton.classList.add(`paused`);
      toggleButton.classList.remove(`running`);
      toggleButton.textContent = `Start`;

      console.log(`was running now paused`);
      testFunction();

      break;

    // if timer is currently paused then run, remove paused
    case isPaused:
      toggleButton.classList.add(`running`);
      toggleButton.classList.remove(`paused`);
      toggleButton.textContent = `Pause`;
      incrementedTime = latestTime - startTime;
      console.log(`was paused now running`);
      testFunction();
      break;

    default:
  }
}

// remove other states and make initial state again
function resetTimer() {
  toggleButton.classList.remove(`running`);
  toggleButton.classList.remove(`paused`);
  toggleButton.classList.add(`initial-state`);
  startTime = 0;
  savedTime = 0;
  toggleButton.textContent = `Start`;
  console.log(`was x now reset to initial`);
  testFunction();
}

//- button event listeners
toggleButton.addEventListener(`click`, toggleTimer);
resetButton.addEventListener(`click`, resetTimer);

//- State functions

function runningTimer() {
  // update state values
  isInitialState = toggleButton.classList.contains(`initial-state`);
  isRunning = toggleButton.classList.contains(`running`);
  isPaused = toggleButton.classList.contains(`paused`);
  // update time value
  latestTime = new Date().getTime();

  if (isRunning) {
    // increment savedTime
    if (savedTime === 0) {
      savedTime = latestTime - startTime;
    } else {
      savedTime += incrementedTime;
    }
    console.log(`is running`);
  }
  // if timer has run but isn't currently running then it's paused
  else if (isPaused) {
    console.log(`is paused`);
  } else {
    // nothing here
  }

  seconds = Math.floor(savedTime / 1000);
  timerDisplay.textContent = `
  startTime:             ${startTime}
  savedTime:             ${savedTime}
  total elapsed time:    ${latestTime - startTime}
  latestTime:            ${latestTime}
  Date.getTime:          ${new Date().getTime()}
  savedTime/1000:               ${seconds}`;
}
function updateTimeDisplay() {
  setInterval(runningTimer, 1);
}

updateTimeDisplay();
