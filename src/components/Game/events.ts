import { ballMove } from './animation';
import { resetPanelInfoValues } from './render';
import { globals } from '../../constants/globals';

/**
 * Set up game event handlers
 */
function setUpEventHandlers() {
  document.body.addEventListener('keydown', globals.eventListeners.keyDown);
}

/**
 * Remove game event handlers
 */
function removeEventHandlers() {
  document.body.removeEventListener('keydown', globals.eventListeners.keyDown);
}

/**
 * Keyboard event handler
 *
 * @param event
 */
function keyDownHandler(event: KeyboardEvent) {
  const onBallMove = (direction: string) => {
    ballMove.call(this, direction).then(onBallMoveCompleted).catch(() => {
      console.log('Cannot move here');
    });
  };

  const onBallMoveCompleted = () => {
    this.stepsCount += 1;

    resetPanelInfoValues.call(this);
  };

  if (!this.isBallMoving && !this.isGameOver) {
    switch (event.key) {
      case 'ArrowUp':
      case 'Up': {
        onBallMove('up');
        break;
      }
      case 'ArrowRight':
      case 'Right': {
        onBallMove('right');
        break;
      }
      case 'ArrowDown':
      case 'Down': {
        onBallMove('down');
        break;
      }
      case 'ArrowLeft':
      case 'Left': {
        onBallMove('left');
        break;
      }
      default: break;
    }
  }
}

export { keyDownHandler, removeEventHandlers, setUpEventHandlers };
