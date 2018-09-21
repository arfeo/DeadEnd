import { globals } from '../../constants/globals';

import { renderGameBoard, renderObjects, resetPanelInfoValues } from './render';
import { keyDownHandler, removeEventHandlers, setUpEventHandlers } from './events';
import { setCellSize } from '../../utils/common';

import { IUndoMap } from '../../types/constants';

class Game {
  appRoot: HTMLElement;
  gameBoardGrid: HTMLElement;
  panelLevelsValue: HTMLElement;
  panelStepsValue: HTMLElement;
  panelUndosValue: HTMLElement;
  panelUndoButton: HTMLElement;
  panelHelpButton: HTMLElement;
  levelId: number;
  stepsCount: number;
  undosCount: number;
  ballCanvas: HTMLCanvasElement;
  stonesCanvas: HTMLCanvasElement;
  cellSize: number;
  ballPosition: number[];
  stonePositions: number[][];
  undoMap: IUndoMap[];
  ballAnimationId: number;
  isBallMoving: boolean;
  stoneAnimationId: number;
  isGameOver: boolean;

  constructor(levelId = 1, stepsCount = 0, undosCount = 0) {
    this.appRoot = document.getElementById('root');
    this.gameBoardGrid = document.createElement('div');
    this.panelLevelsValue = document.createElement('div');
    this.panelStepsValue = document.createElement('div');
    this.panelUndosValue = document.createElement('div');
    this.panelUndoButton = document.createElement('div');
    this.panelHelpButton = document.createElement('div');

    this.ballCanvas = document.createElement('canvas');
    this.stonesCanvas = document.createElement('canvas');

    this.levelId = levelId;
    this.stepsCount = stepsCount;
    this.undosCount = undosCount;

    this.cellSize = setCellSize();

    this.ballPosition = [];
    this.stonePositions = [];
    this.undoMap = [];

    this.isBallMoving = false;
    this.isGameOver = false;

    globals.eventListeners = {
      keyDown: keyDownHandler.bind(this),
    };

    this.render();
  }

  render() {
    renderGameBoard.call(this);
    renderObjects.call(this);
    resetPanelInfoValues.call(this);
    setUpEventHandlers.call(this);
  }

  destroy() {
    clearTimeout(this.ballAnimationId);
    clearTimeout(this.stoneAnimationId);

    removeEventHandlers.call(this);

    globals.pageInstance = null;
  }
}

export { Game };
