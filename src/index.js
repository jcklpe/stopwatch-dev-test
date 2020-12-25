//- scss injection
import "./styles.scss";

const autoBind = require(`auto-bind`);

//- Global Variables

let stopwatchIter = 0;
const stopwatchGroup = [];

const appDiv = document.getElementById(`app`);
// define component markup
const stopwatchMarkup = `<div class="timer-group">
       <p class="time-display">0:00.00</p>
     </div>

     <div class="button-group">
       <button class="toggle-timer initial-state">Start</button>
       <button class="reset-timer">Reset</button>
     </div>`;

//- utility functions
const sumArray = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
};

//- Class Object definitions
class Stopwatch {
  constructor() {
    // automatically binds all methods' use of this
    autoBind(this);

    this.stopwatchComponent = document.createElement(`div`);
    this.stopwatchComponent.classList.add(
      `stopwatch-component`,
      `stopwatch-component-${stopwatchIter}`
    );
    appDiv.appendChild(this.stopwatchComponent);
    this.stopwatchComponent.innerHTML = stopwatchMarkup;

    //button selectors
    this.toggleButton = document.querySelector(`.toggle-timer`);
    this.resetButton = document.querySelector(`.reset-timer`);

    // button event listeners
    this.toggleButton.addEventListener(`click`, this.toggleTimer);
    this.resetButton.addEventListener(`click`, this.resetTimer);

    // declare initial isState
    this.isInitialState = this.toggleButton.classList.contains(`initial-state`);
    this.isRunning = this.toggleButton.classList.contains(`running`);
    this.isPaused = this.toggleButton.classList.contains(`paused`);

    // declare initial time variables
    this.now = 0;
    this.startTime = 0;
    this.timeElapsed = 0;
    this.pausedTime = 0;
    this.unpausedTime = 0;
    this.pauseIncrement = 0;
    this.totalPausedTimeArray = [];
    this.totalPausedTime = 0;
    this.seconds = 0;
    this.minutes = 0;

    // declare initial display content
    this.content = `0:00.00`;

    this.timerDisplay = document.querySelector(`.time-display`);
    this.loop();
  } //end of constructor

  loop() {
    // update ui state
    this.isInitialState = this.toggleButton.classList.contains(`initial-state`);
    this.isRunning = this.toggleButton.classList.contains(`running`);
    this.isPaused = this.toggleButton.classList.contains(`paused`);

    //update time variables
    this.now = Date.now();

    if (this.isRunning) {
      this.timeElapsed = this.now - this.startTime - this.totalPausedTime;
      this.seconds = this.timeElapsed / 1000;
      this.seconds = (this.seconds % 60).toFixed(2);
      this.minutes = Math.floor(this.timeElapsed / 1000 / 60);
    }

    // render display content
    if (this.seconds < 9.99999) {
      this.content = `${this.minutes}:0${this.seconds}`;
    } else {
      this.content = `${this.minutes}:${this.seconds}`;
    }

    if (!this.isInitialState) {
      document.title = this.content;
      this.timerDisplay.innerHTML = this.content;
    } else {
      this.content = `0:00.00`;
      document.title = `Stopwatch`;
      this.timerDisplay.innerHTML = this.content;
    }

    requestAnimationFrame(this.loop);
  } // end of loop method

  toggleTimer() {
    switch (true) {
      // if in intial state, start timer to run state, remove initial state, and log start time
      case this.isInitialState:
        this.startTime = Date.now();
        this.toggleButton.classList.add(`running`);
        this.toggleButton.classList.remove(`initial-state`);
        this.toggleButton.textContent = `Pause`;

        break;

      // if timer is currently running, pause timer, remove running, and save time to variable
      case this.isRunning:
        this.toggleButton.classList.add(`paused`);
        this.toggleButton.classList.remove(`running`);
        this.toggleButton.textContent = `Resume`;
        this.pausedTime = Date.now();

        break;

      // if timer is currently paused then start running state, remove paused, and update time variables
      case this.isPaused:
        this.toggleButton.classList.add(`running`);
        this.toggleButton.classList.remove(`paused`);
        this.toggleButton.textContent = `Pause`;
        this.unpausedTime = Date.now();
        this.pauseIncrement = this.unpausedTime - this.pausedTime;
        this.totalPausedTimeArray.push(this.pauseIncrement);
        this.totalPausedTime = sumArray(this.totalPausedTimeArray);

        break;

      default:
    }
  }

  // revert to intitial state, and reset time variables
  resetTimer() {
    // reset to initial state
    this.toggleButton.classList.remove(`running`);
    this.toggleButton.classList.remove(`paused`);
    this.toggleButton.classList.add(`initial-state`);

    // reset time variables
    this.startTime = 0;
    this.timeElapsed = 0;
    this.pausedTime = 0;
    this.unpausedTime = 0;
    this.pauseIncrement = 0;
    this.totalPausedTimeArray.length = 0;
    this.totalPausedTime = 0;
    this.seconds = 0;
    this.minutes = 0;

    // reset ui content
    this.toggleButton.textContent = `Start`;
    this.content = `0:00.00`;
  }
} //end of Stopwatch class

//- Global UI functions
const spawnTimer = function() {
  console.log(`spawning a new timer ${stopwatchIter}`);
  stopwatchGroup[stopwatchIter] = new Stopwatch();
  console.log(stopwatchGroup[stopwatchIter]);
  stopwatchIter++;
};

//- Global UI

const spawnButton = document.querySelector(`.spawn-button`);
spawnButton.addEventListener(`click`, spawnTimer);
