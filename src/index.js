//- scss injection
import "./styles.scss";

//- utility functions
const sumArray = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
};

class Stopwatch {
  constructor(kind) {
    this.kind = kind;
    this.isLooping = false;

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
    // this.toggleButton.addEventListener(`click`, this.toggleTimer);
    // this.resetButton.addEventListener(`click`, this.resetTimer);
    this.toggleButton.addEventListener(`click`, this.startTimer);

    // Method binding
    this.loop = this.loop.bind(this);
    this.startTimer = this.startTimer.bind(this);
  } //end of constructor

  //- Methods
  loop() {
    while (this.isLooping) {
      console.log(`IT'S LOOPING!!!!`);
    } // end of while loop
  }

  startTimer() {
    // this.isLooping = true;
    console.log(`isLooping:${this.isLooping}`);
  }
} //end of Stopwatch class

//- Run

const instance = new Stopwatch();
