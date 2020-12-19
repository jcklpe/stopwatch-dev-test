// update ui state
this.isInitialState = this.toggleButton.classList.contains(`initial-state`);
this.isRunning = this.toggleButton.classList.contains(`running`);
this.isPaused = this.toggleButton.classList.contains(`paused`);

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
