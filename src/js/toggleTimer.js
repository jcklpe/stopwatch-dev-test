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