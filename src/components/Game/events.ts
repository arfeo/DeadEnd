import { Goto } from '../Goto';
import { Help } from '../Help';

import { APP } from '../../constants/global';

import { ballMove } from './animation';
import { renderGameObjects, resetPanelInfoValues } from './render';

/**
 * Set up game event handlers
 */
function setUpEventHandlers() {
  APP.eventListeners = {
    onKeyDown: keyDownHandler.bind(this),
    onGotoButtonClick: gotoButtonClickHandler.bind(this),
    onUndoButtonClick: undoButtonClickHandler.bind(this),
    onHelpButtonClick: helpButtonClickHandler.bind(this),
  };

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
  this.panelGotoButton.addEventListener('click', APP.eventListeners.onGotoButtonClick);
  this.panelUndoButton.addEventListener('click', APP.eventListeners.onUndoButtonClick);
  this.panelHelpButton.addEventListener('click', APP.eventListeners.onHelpButtonClick);
}

/**
 * Remove game event handlers
 */
function removeEventHandlers() {
  document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);
  this.panelGotoButton.removeEventListener('click', APP.eventListeners.onGotoButtonClick);
  this.panelUndoButton.removeEventListener('click', APP.eventListeners.onUndoButtonClick);
  this.panelHelpButton.removeEventListener('click', APP.eventListeners.onHelpButtonClick);
}

/**
 * Keyboard event handler
 *
 * @param event
 */
function keyDownHandler(event: KeyboardEvent) {
  const onBallMove = (direction: string) => {
    ballMove.call(this, direction).then(onBallMoveCompleted).catch(() => {
      // TODO: add a corresponding sound effect
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
 * Go to level button click handler
 */
function gotoButtonClickHandler() {
  new Goto(this);
}

/**
 * Undo button click handler
 */
function undoButtonClickHandler() {
  const undoMapSize: number = Array.isArray(this.undoHistoryMap) ? this.undoHistoryMap.length : 0;

  if (undoMapSize > 0) {
    renderGameObjects.call(this, JSON.parse(JSON.stringify(this.undoHistoryMap[undoMapSize - 1])));

    this.undoHistoryMap.pop();
    this.undosCount += 1;
    this.isGameOver = false;

    resetPanelInfoValues.call(this);
  }
}

/**
 * Help button click handler
 */
function helpButtonClickHandler() {
  new Help(this);
}

export {
  gotoButtonClickHandler,
  keyDownHandler,
  removeEventHandlers,
  setUpEventHandlers,
  undoButtonClickHandler,
  helpButtonClickHandler,
};
