import { cloneDeep, isArray } from 'lodash';

import { globals } from '../../constants/globals';

import { ballMove } from './animation';
import { renderGameObjects, resetPanelInfoValues } from './render';

/**
 * Set up game event handlers
 */
function setUpEventHandlers() {
  document.body.addEventListener('keydown', globals.eventListeners.onKeyDown);
  this.panelUndoButton.addEventListener('click', globals.eventListeners.onUndoButtonClick);
}

/**
 * Remove game event handlers
 */
function removeEventHandlers() {
  document.body.removeEventListener('keydown', globals.eventListeners.onKeyDown);
  this.panelUndoButton.removeEventListener('click', globals.eventListeners.onUndoButtonClick);
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

/**
 * Undo button click handler
 */
function undoButtonClickHandler() {
  const undoMapSize = isArray(this.undoHistoryMap) ? this.undoHistoryMap.length : 0;

  if (undoMapSize > 0) {
    renderGameObjects.call(this, cloneDeep(this.undoHistoryMap[undoMapSize - 1]));

    this.undoHistoryMap.pop();
    this.undosCount += 1;
    this.isGameOver = false;

    resetPanelInfoValues.call(this);
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
  keyDownHandler,
  undoButtonClickHandler,
};
