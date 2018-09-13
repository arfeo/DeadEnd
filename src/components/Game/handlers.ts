import { ballMove } from './animation';

export function setUpEventHandlers() {
  document.body.addEventListener('keydown', keyDownHandler.bind(this));
  document.body.addEventListener('keyup', () => clearTimeout(this.keyPressTimer));
}

async function keyDownHandler(event: KeyboardEvent) {
  if (!this.isBallMoving) {
    this.keyPressTimer = setTimeout(() => {
      // ..

      clearTimeout(this.keyPressTimer);
    }, 1000);

    switch (event.key) {
      case 'ArrowUp':
      case 'Up': {
        await ballMove.call(this, 'up');
        break;
      }
      case 'ArrowRight':
      case 'Right': {
        await ballMove.call(this, 'right');
        break;
      }
      case 'ArrowDown':
      case 'Down': {
        await ballMove.call(this, 'down');
        break;
      }
      case 'ArrowLeft':
      case 'Left': {
        await ballMove.call(this, 'left');
        break;
      }
      default: break;
    }
  }
}
