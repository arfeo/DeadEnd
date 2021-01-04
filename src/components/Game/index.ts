import { CELL_SIZE_VMIN } from '../../constants/game';

import {
  renderGameBoard,
  renderMapObjects,
  resetPanelInfoValues,
} from './render';

import {
  removeEventHandlers,
  setUpEventHandlers,
} from './events';

import { setCellSize } from '../../utils/common';

class Game {
  gameBoardGrid: HTMLElement;
  panelLevelsValue: HTMLElement;
  panelStepsValue: HTMLElement;
  panelUndosValue: HTMLElement;
  panelGotoButton: HTMLElement;
  panelUndoButton: HTMLElement;
  panelHelpButton: HTMLElement;
  levelId: number;
  stepsCount: number;
  undosCount: number;
  staticCanvas: HTMLCanvasElement;
  ballCanvas: HTMLCanvasElement;
  stonesCanvas: HTMLCanvasElement;
  cellSize: number;
  ballPosition: number[];
  stonePositions: number[][];
  undoHistoryMap: Array<number[][]>;
  ballAnimationId: number;
  isBallMoving: boolean;
  stoneAnimationId: number;
  isGameOver: boolean;

  constructor(levelId = 1, stepsCount = 0, undosCount = 0) {
    this.levelId = levelId;
    this.stepsCount = stepsCount;
    this.undosCount = undosCount;

    this.cellSize = setCellSize(CELL_SIZE_VMIN);

    this.ballPosition = [];
    this.stonePositions = [];
    this.undoHistoryMap = [];

    this.isBallMoving = false;
    this.isGameOver = false;

    this.render();

    setUpEventHandlers.call(this);
  }

  render(): void {
    renderGameBoard.call(this);
    renderMapObjects.call(this);
    resetPanelInfoValues.call(this);
  }

  destroy(): void {
    clearTimeout(this.ballAnimationId);
    clearTimeout(this.stoneAnimationId);

    removeEventHandlers.call(this);
  }
}

export { Game };
