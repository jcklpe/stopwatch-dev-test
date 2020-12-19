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