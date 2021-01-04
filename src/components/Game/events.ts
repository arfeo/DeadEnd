import { Goto } from '../Goto';
import { Help } from '../Help';

import { APP } from '../../constants/global';

import { ballMove } from './animation';
import { renderMapObjects, resetPanelInfoValues } from './render';

function setUpEventHandlers(): void {
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
function removeEventHandlers(): void {
  document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);
  this.panelGotoButton.removeEventListener('click', APP.eventListeners.onGotoButtonClick);
  this.panelUndoButton.removeEventListener('click', APP.eventListeners.onUndoButtonClick);
  this.panelHelpButton.removeEventListener('click', APP.eventListeners.onHelpButtonClick);
}

function keyDownHandler(event: KeyboardEvent): void {
  const onBallMoveCompleted = (): void => {
    this.stepsCount += 1;

    resetPanelInfoValues.call(this);
  };

  const onBallMove = (direction: string): void => {
    ballMove.call(this, direction).then(onBallMoveCompleted).catch(() => {
      // TODO: add a corresponding sound effect
    });
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

function gotoButtonClickHandler(): void {
  new Goto(this);
}

function undoButtonClickHandler(): void {
  const undoMapSize: number = Array.isArray(this.undoHistoryMap) ? this.undoHistoryMap.length : 0;

  if (undoMapSize > 0) {
    renderMapObjects.call(this, JSON.parse(JSON.stringify(this.undoHistoryMap[undoMapSize - 1])));

    this.undoHistoryMap.pop();
    this.undosCount += 1;
    this.isGameOver = false;

    resetPanelInfoValues.call(this);
  }
}

function helpButtonClickHandler(): void {
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
