import { ballMove } from './animation';
import { resetPanelInfoValues } from './render';

/**
 * Set up game event handlers
 */
function setUpEventHandlers() {
  document.body.addEventListener('keydown', keyDownHandler.bind(this));
}

/**
 * Keyboard event handler
 *
 * @param event
 */
function keyDownHandler(event: KeyboardEvent) {
  if (!this.isBallMoving) {
    switch (event.key) {
      case 'ArrowUp':
      case 'Up': {
        ballMove.call(this, 'up').then(() => {
          this.stepsCount += 1;

          resetPanelInfoValues.call(this);
        }).catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowRight':
      case 'Right': {
        ballMove.call(this, 'right').then(() => {
          this.stepsCount += 1;

          resetPanelInfoValues.call(this);
        }).catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowDown':
      case 'Down': {
        ballMove.call(this, 'down').then(() => {
          this.stepsCount += 1;

          resetPanelInfoValues.call(this);
        }).catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      case 'ArrowLeft':
      case 'Left': {
        ballMove.call(this, 'left').then(() => {
          this.stepsCount += 1;

          resetPanelInfoValues.call(this);
        }).catch(() => {
          console.log('Cannot move here');
        });
        break;
      }
      default: break;
    }
  }
}

export { setUpEventHandlers };
