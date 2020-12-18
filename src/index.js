//- scss injection
import "./styles.scss";

// utility functions
const sumArray = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
};

class Stopwatch {
  constructor() {
    //ui selector variables
    this.timerDisplay = document.querySelector(`.time-display`);
    this.toggleButton = document.querySelector(`.toggle-timer`);
    this.resetButton = document.querySelector(`.reset-timer`);

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

    // declare initial isState
    this.isInitialState = this.toggleButton.classList.contains(`initial-state`);
    this.isRunning = this.toggleButton.classList.contains(`running`);
    this.isPaused = this.toggleButton.classList.contains(`paused`);

    // button event listeners
    this.toggleButton.addEventListener(`click`, this.toggleTimer);
    this.resetButton.addEventListener(`click`, this.resetTimer);
  } // end of constructor

  // loop method
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
      this.content = `${minutes}:0${seconds}`;
    } else {
      this.content = `${minutes}:${seconds}`;
    }

    if (!this.isInitialState) {
      document.title = this.content;
      this.timerDisplay.innerHTML = content;
    } else {
      this.content = `0:00.00`;
      this.document.title = `Stopwatch`;
      this.timerDisplay.innerHTML = this.content;
    }

    requestAnimationFrame(this.loop);
  } // end of loop method

  // reset method
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
  } // end of reset method
} // end of Stopwatch class

const go = new Stopwatch();
