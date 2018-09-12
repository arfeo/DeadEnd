import { globals } from '../../constants/globals';

import { setCellSize } from '../../utils/common';
import {
  renderBall,
  renderGameBoard,
  resetPanelInfoValues,
} from './render';

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
  stonesPosition: number[][];

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

    this.render();
  }

  destroy() {
    globals.pageInstance = null;
  }

  render() {
    renderGameBoard.call(this);
    renderBall.call(this);
    resetPanelInfoValues.call(this);
  }
}

export { Game };
