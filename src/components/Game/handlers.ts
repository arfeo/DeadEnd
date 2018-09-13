export function setUpEventHandlers() {
  document.body.addEventListener('keydown', keyDownHandler.bind(this));
  document.body.addEventListener('keyup', keyUpHandler.bind(this));

  this.mainLoopTimer = setInterval(mainLoopHandler.bind(this), 0);
}

function keyDownHandler(event: KeyboardEvent) {
  this.keyPressTimer = setTimeout(() => {
    // ..

    clearTimeout(this.keyPressTimer);
  }, 1000);

  switch (event.key) {
    case 'ArrowUp':
    case 'Up':
    {
      this.keysDown.arrowUp = true;
      break;
    }
    case 'ArrowRight':
    case 'Right':
    {
      this.keysDown.arrowRight = true;
      break;
    }
    case 'ArrowDown':
    case 'Down':
    {
      this.keysDown.arrowDown = true;
      break;
    }
    case 'ArrowLeft':
    case 'Left':
    {
      this.keysDown.arrowLeft = true;
      break;
    }
    default: break;
  }
}

function keyUpHandler(event: KeyboardEvent) {
  clearTimeout(this.keyPressTimer);

  switch (event.key) {
    case 'ArrowUp':
    case 'Up':
    {
      this.keysDown.arrowUp = false;
      break;
    }
    case 'ArrowRight':
    case 'Right':
    {
      this.keysDown.arrowRight = false;
      break;
    }
    case 'ArrowDown':
    case 'Down':
    {
      this.keysDown.arrowDown = false;
      break;
    }
    case 'ArrowLeft':
    case 'Left':
    {
      this.keysDown.arrowLeft = false;
      break;
    }
    default: break;
  }
}

function mainLoopHandler() {
  // ..
}
