import { ballMove } from './animation';

export function setUpEventHandlers() {
  document.body.addEventListener('keydown', keyDownHandler.bind(this));
}

function keyDownHandler(event: KeyboardEvent) {
  if (!this.isBallMoving) {
    switch (event.key) {
      case 'ArrowUp':
      case 'Up': {
        ballMove.call(this, 'up').catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowRight':
      case 'Right': {
        ballMove.call(this, 'right').catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowDown':
      case 'Down': {
        ballMove.call(this, 'down').catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowLeft':
      case 'Left': {
        ballMove.call(this, 'left').catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      default: break;
    }
  }
}
