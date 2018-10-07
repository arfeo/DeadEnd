// tslint:disable:max-file-line-count
import { isEmpty } from 'lodash';

import { levels } from '../../constants/levels';
import { gameColors, stoneLabels, gridDimensions, STONE_LABEL_FONT } from '../../constants/game';

import { levelIndexById } from './utils';

/**
 * Render the game board infrastructure
 */
function renderGameBoard() {
  const gameBoard: HTMLElement = document.createElement('div');
  const gameBoardPanel: HTMLElement = document.createElement('div');
  const gameBoardPanelInfo: HTMLElement = document.createElement('div');
  const panelLevelLabel: HTMLElement = document.createElement('div');
  const panelStepsLabel: HTMLElement = document.createElement('div');
  const panelUndosLabel: HTMLElement = document.createElement('div');

  this.appRoot.innerHTML = '';

  gameBoard.className = 'gameBoard';
  this.gameBoardGrid.className = '-grid';
  gameBoardPanel.className = '-panel';
  gameBoardPanelInfo.className = '-info';
  panelLevelLabel.className = '-label';
  panelStepsLabel.className = '-label';
  panelUndosLabel.className = '-label';

  this.panelLevelsValue.className = '-value';
  this.panelStepsValue.className = '-value';
  this.panelUndosValue.className = '-value';
  this.panelGotoButton.className = '-goto';
  this.panelUndoButton.className = '-undo';
  this.panelHelpButton.className = '-help';

  panelLevelLabel.innerText = 'Level:';
  panelStepsLabel.innerText = 'Steps:';
  panelUndosLabel.innerText = 'Undos:';

  this.appRoot.appendChild(gameBoard);

  gameBoard.appendChild(this.gameBoardGrid);
  gameBoard.appendChild(gameBoardPanel);
  gameBoardPanel.appendChild(gameBoardPanelInfo);
  gameBoardPanelInfo.appendChild(panelLevelLabel);
  gameBoardPanelInfo.appendChild(this.panelLevelsValue);
  gameBoardPanelInfo.appendChild(panelStepsLabel);
  gameBoardPanelInfo.appendChild(this.panelStepsValue);
  gameBoardPanelInfo.appendChild(panelUndosLabel);
  gameBoardPanelInfo.appendChild(this.panelUndosValue);
  gameBoardPanel.appendChild(this.panelGotoButton);
  gameBoardPanel.appendChild(this.panelUndoButton);
  gameBoardPanel.appendChild(this.panelHelpButton);

  this.staticCanvas = document.createElement('canvas');
  this.staticCanvas.className = '-static-canvas';
  this.staticCanvas.width = this.cellSize * gridDimensions.Width;
  this.staticCanvas.height = this.cellSize * gridDimensions.Height;

  this.ballCanvas = document.createElement('canvas');
  this.ballCanvas.className = '-ball-canvas';
  this.ballCanvas.width = this.cellSize * gridDimensions.Width;
  this.ballCanvas.height = this.cellSize * gridDimensions.Height;

  this.stonesCanvas = document.createElement('canvas');
  this.stonesCanvas.className = '-stones-canvas';
  this.stonesCanvas.width = this.cellSize * gridDimensions.Width;
  this.stonesCanvas.height = this.cellSize * gridDimensions.Height;

  this.gameBoardGrid.appendChild(this.staticCanvas);
  this.gameBoardGrid.appendChild(this.ballCanvas);
  this.gameBoardGrid.appendChild(this.stonesCanvas);
}

/**
 * Render game objects
 *
 * @param gameObjects
 */
function renderGameObjects(gameObjects: number[][] = []) {
  const boardMap = !isEmpty(gameObjects) ? gameObjects : levels[levelIndexById(this.levelId)].boardMap;

  const ctxStatic: CanvasRenderingContext2D = this.staticCanvas.getContext('2d');
  const ctxBall: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ctxStones: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');

  ctxStatic.clearRect(
    0,
    0,
    this.cellSize * gridDimensions.Width,
    this.cellSize * gridDimensions.Height,
  );
  ctxBall.clearRect(
    0,
    0,
    this.cellSize * gridDimensions.Width,
    this.cellSize * gridDimensions.Height,
  );
  ctxStones.clearRect(
    0,
    0,
    this.cellSize * gridDimensions.Width,
    this.cellSize * gridDimensions.Height,
  );

  for (let y = 0; y < gridDimensions.Height; y += 1) {
    this.stonePositions[y] = [];

    for (let x = 0; x < gridDimensions.Width; x += 1) {
      const currentBoardCell: number = boardMap[y][x];

      switch (currentBoardCell) {
        case 1: { // Ball
          this.ballPosition = [y, x];
          this.stonePositions[y].push(0);

          ctxBall.fillStyle = gameColors.Ball;
          ctxBall.beginPath();
          ctxBall.arc(
            x * this.cellSize + this.cellSize / 2,
            y * this.cellSize + this.cellSize / 2,
            this.cellSize / 2.5,
            0,
            Math.PI * 2,
            false,
          );
          ctxBall.fill();

          break;
        }
        case 2: { // Exit
          this.stonePositions[y].push(currentBoardCell);

          const grdX = x * this.cellSize + this.cellSize / 2;
          const grdY = y * this.cellSize + this.cellSize / 2;
          const innerRadius = this.cellSize / 8;
          const outerRadius = this.cellSize / 3;

          const gradient = ctxStatic.createRadialGradient(
            grdX,
            grdY,
            innerRadius,
            grdX,
            grdY,
            outerRadius,
          );
          gradient.addColorStop(0, gameColors.ExitGradientInner);
          gradient.addColorStop(1, gameColors.ExitGradientOuter);

          ctxStatic.fillStyle = gradient;
          ctxStatic.beginPath();
          ctxStatic.arc(
            x * this.cellSize + this.cellSize / 2,
            y * this.cellSize + this.cellSize / 2,
            this.cellSize / 2.5,
            0,
            Math.PI * 2,
            false,
          );
          ctxStatic.fill();

          break;
        }
        case 3: { // Wall
          this.stonePositions[y].push(currentBoardCell);

          ctxStatic.fillStyle = gameColors.Wall;
          ctxStatic.fillRect(
            x * this.cellSize,
            y * this.cellSize,
            this.cellSize,
            this.cellSize,
          );

          for (let i = 1; i <= 4; i += 1) {
            ctxStatic.beginPath();
            ctxStatic.moveTo(
              x * this.cellSize,
              y * this.cellSize + i * this.cellSize / 4,
            );
            ctxStatic.lineTo(
              x * this.cellSize + this.cellSize,
              y * this.cellSize + i * this.cellSize / 4,
            );
            ctxStatic.stroke();
          }

          for (let i = 1; i <= 4; i += 1) {
            ctxStatic.beginPath();
            ctxStatic.moveTo(
              x * this.cellSize + (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
              y * this.cellSize + (i - 1) * this.cellSize / 4,
            );
            ctxStatic.lineTo(
              x * this.cellSize + (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
              y * this.cellSize + (i - 1) * this.cellSize / 4 + this.cellSize / 4,
            );
            ctxStatic.stroke();
          }

          break;
        }
        case 4: { // Stone (regular)
          this.stonePositions[y].push(currentBoardCell);

          ctxStones.fillStyle = gameColors.Stone;
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          break;
        }
        case 5: { // Stone (up arrow)
          this.stonePositions[y].push(currentBoardCell);

          ctxStones.fillStyle = gameColors.Stone;
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          ctxStones.fillStyle = gameColors.StoneLabel;
          ctxStones.font = STONE_LABEL_FONT;
          ctxStones.fillText(
            stoneLabels.Up,
            x * this.cellSize + this.cellSize / 2.5 - 1,
            y * this.cellSize + this.cellSize / 1.5 - 1,
          );

          break;
        }
        case 6: { // Stone (right arrow)
          this.stonePositions[y].push(currentBoardCell);

          ctxStones.fillStyle = gameColors.Stone;
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          ctxStones.fillStyle = gameColors.StoneLabel;
          ctxStones.font = STONE_LABEL_FONT;
          ctxStones.fillText(
            stoneLabels.Right,
            x * this.cellSize + this.cellSize / 3.5,
            y * this.cellSize + this.cellSize / 1.5,
          );

          break;
        }
        case 7: { // Stone (down arrow)
          this.stonePositions[y].push(currentBoardCell);

          ctxStones.fillStyle = gameColors.Stone;
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          ctxStones.fillStyle = gameColors.StoneLabel;
          ctxStones.font = STONE_LABEL_FONT;
          ctxStones.fillText(
            stoneLabels.Down,
            x * this.cellSize + this.cellSize / 2.5 - 1,
            y * this.cellSize + this.cellSize / 1.5 - 1,
          );

          break;
        }
        case 8: { // Stone (left arrow)
          this.stonePositions[y].push(currentBoardCell);

          ctxStones.fillStyle = gameColors.Stone;
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          ctxStones.fillStyle = gameColors.StoneLabel;
          ctxStones.font = STONE_LABEL_FONT;
          ctxStones.fillText(
            stoneLabels.Left,
            x * this.cellSize + this.cellSize / 3.5,
            y * this.cellSize + this.cellSize / 1.5,
          );

          break;
        }
        default: {
          this.stonePositions[y].push(0);

          break;
        }
      }
    }
  }
}

/**
 * Set panel info values (level, steps, undos)
 */
function resetPanelInfoValues() {
  this.panelLevelsValue.innerText = this.levelId.toString();
  this.panelStepsValue.innerText = this.stepsCount.toString();
  this.panelUndosValue.innerText = this.undosCount.toString();
}

export { renderGameBoard, renderGameObjects, resetPanelInfoValues };
