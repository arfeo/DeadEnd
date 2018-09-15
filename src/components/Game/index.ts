import { globals } from '../../constants/globals';

import { renderGameBoard, resetPanelInfoValues } from './render';
import { setUpEventHandlers } from './events';
import { setCellSize } from '../../utils/common';

class Game {
  appRoot: HTMLElement;
  panelLevelsValue: HTMLElement;
  panelStepsValue: HTMLElement;
  panelUndosValue: HTMLElement;
  levelId: number;
  stepsCount: number;
  undosCount: number;
  ballCanvas: HTMLCanvasElement;
  stonesCanvas: HTMLCanvasElement;
  cellSize: number;
  ballPosition: number[];
  stonePositions: number[][];
  keyPressTimer: number;
  ballAnimationId: number;
  isBallMoving: boolean;
  stoneAnimationId: number;
  isGameOver: boolean;

  constructor(levelId = 1, stepsCount = 0, undosCount = 0) {
    this.appRoot = document.getElementById('root');
    this.panelLevelsValue = document.createElement('div');
    this.panelStepsValue = document.createElement('div');
    this.panelUndosValue = document.createElement('div');

    this.ballCanvas = document.createElement('canvas');
    this.stonesCanvas = document.createElement('canvas');

    this.levelId = levelId;
    this.stepsCount = stepsCount;
    this.undosCount = undosCount;

    this.cellSize = setCellSize();

    this.ballPosition = [];
    this.stonePositions = [];

    this.keyPressTimer = null;

    this.isBallMoving = false;

    this.isGameOver = false;

    this.render();
  }

  render() {
    renderGameBoard.call(this);
    resetPanelInfoValues.call(this);
    setUpEventHandlers.call(this);
  }

  destroy() {
    clearTimeout(this.ballAnimationId);
    clearTimeout(this.stoneAnimationId);

    globals.pageInstance = null;
  }
}

export { Game };
