import {
  renderBall,
  renderGameBoard,
  renderStones,
  resetPanelInfoValues,
} from './render';
import { setUpEventHandlers } from './handlers';
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
  mainLoopTimer: number;
  keyPressTimer: number;
  keysDown: {
    arrowUp: boolean;
    arrowRight: boolean;
    arrowDown: boolean;
    arrowLeft: boolean;
  };

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

    this.stonePositions = [];

    this.mainLoopTimer = null;
    this.keyPressTimer = null;

    this.keysDown = {
      arrowUp: false,
      arrowRight: false,
      arrowDown: false,
      arrowLeft: false,
    };

    this.render();
  }

  private render() {
    renderGameBoard.call(this);
    renderBall.call(this);
    renderStones.call(this);
    resetPanelInfoValues.call(this);

    setUpEventHandlers.call(this);
  }
}

export { Game };
