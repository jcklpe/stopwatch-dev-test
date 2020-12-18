//- scss injection
import "./styles.scss";

//- utility functions
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

    // kickoff loop
    // requestAnimationFrame(this.loop);
  } //end of constructor

  //- Methods
  // stopwatch loop process
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

  // toggle time between 3 states of initial, running, and paused
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
  } //end of resetTimer method
} //end of Stopwatch class

//- Run

const instance = new Stopwatch();
instance.loop();
