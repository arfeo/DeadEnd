import { levels } from '../../constants/levels';
import {
  gameColors,
  stoneLabels,
  STONE_LABEL_FONT,
} from '../../constants/game';

import { levelIndexById } from './utils';

/**
 * Render the game board infrastructure and game objects
 */
function renderGameBoard() {
  // ----- INFRASTRUCTURE ----- //
  const gameBoard: HTMLElement = document.createElement('div');
  const gameBoardGrid: HTMLElement = document.createElement('div');
  const gameBoardPanel: HTMLElement = document.createElement('div');
  const gameBoardPanelInfo: HTMLElement = document.createElement('div');
  const panelLevelLabel: HTMLElement = document.createElement('div');
  const panelStepsLabel: HTMLElement = document.createElement('div');
  const panelUndosLabel: HTMLElement = document.createElement('div');
  const panelHepButton: HTMLElement = document.createElement('div');

  this.appRoot.innerHTML = '';

  gameBoard.className = 'gameBoard';
  gameBoardGrid.className = '-grid';
  gameBoardPanel.className = '-panel';
  gameBoardPanelInfo.className = '-info';
  panelLevelLabel.className = '-label';
  panelStepsLabel.className = '-label';
  panelUndosLabel.className = '-label';
  panelHepButton.className = '-help';

  this.panelLevelsValue.className = '-value';
  this.panelStepsValue.className = '-value';
  this.panelUndosValue.className = '-value';

  panelLevelLabel.innerText = 'Level:';
  panelStepsLabel.innerText = 'Steps:';
  panelUndosLabel.innerText = 'Undos:';

  this.appRoot.appendChild(gameBoard);

  gameBoard.appendChild(gameBoardGrid);
  gameBoard.appendChild(gameBoardPanel);
  gameBoardPanel.appendChild(gameBoardPanelInfo);
  gameBoardPanelInfo.appendChild(panelLevelLabel);
  gameBoardPanelInfo.appendChild(this.panelLevelsValue);
  gameBoardPanelInfo.appendChild(panelStepsLabel);
  gameBoardPanelInfo.appendChild(this.panelStepsValue);
  gameBoardPanelInfo.appendChild(panelUndosLabel);
  gameBoardPanelInfo.appendChild(this.panelUndosValue);
  gameBoardPanel.appendChild(panelHepButton);

  this.ballCanvas = document.createElement('canvas');
  this.ballCanvas.className = '-ball-canvas';
  this.ballCanvas.width = this.cellSize * 32;
  this.ballCanvas.height = this.cellSize * 20;

  this.stonesCanvas = document.createElement('canvas');
  this.stonesCanvas.className = '-stones-canvas';
  this.stonesCanvas.width = this.cellSize * 32;
  this.stonesCanvas.height = this.cellSize * 20;

  gameBoardGrid.appendChild(this.ballCanvas);
  gameBoardGrid.appendChild(this.stonesCanvas);

  // ----- OBJECTS ----- //
  const ctxBall: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ctxStones: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');

  for (let y = 0; y < 20; y += 1) {
    this.stonePositions[y] = [];

    for (let x = 0; x < 32; x += 1) {
      const cell: HTMLCanvasElement = document.createElement('canvas');

      cell.id = `cell-${y}-${x}`;
      cell.className = '-cell';
      cell.width = this.cellSize;
      cell.height = this.cellSize;

      gameBoardGrid.appendChild(cell);

      const ctxCell: CanvasRenderingContext2D = cell.getContext('2d');
      const currentBoardCell: number = levels[levelIndexById(this.levelId)].boardMap[y][x];

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
          this.stonePositions[y].push(0);

          const grdX = this.cellSize / 2;
          const grdY = this.cellSize / 2;
          const innerRadius = this.cellSize / 8;
          const outerRadius = this.cellSize / 3;

          const gradient = ctxCell.createRadialGradient(
            grdX,
            grdY,
            innerRadius,
            grdX,
            grdY,
            outerRadius,
          );
          gradient.addColorStop(0, gameColors.ExitGradientInner);
          gradient.addColorStop(1, gameColors.ExitGradientOuter);

          ctxCell.fillStyle = gradient;
          ctxCell.beginPath();
          ctxCell.arc(
            this.cellSize / 2,
            this.cellSize / 2,
            this.cellSize / 2.5,
            0,
            Math.PI * 2,
            false,
          );
          ctxCell.fill();

          break;
        }
        case 3: { // Wall
          this.stonePositions[y].push(currentBoardCell);

          ctxCell.fillStyle = gameColors.Wall;
          ctxCell.fillRect(
            0,
            0,
            this.cellSize,
            this.cellSize,
          );

          for (let i = 1; i <= 4; i += 1) {
            ctxCell.beginPath();
            ctxCell.moveTo(0, i * (this.cellSize / 4));
            ctxCell.lineTo(this.cellSize, i * (this.cellSize / 4));
            ctxCell.stroke();
          }

          for (let i = 1; i <= 2; i += 1) {
            ctxCell.beginPath();
            ctxCell.moveTo(i * (this.cellSize / 2), 0);
            ctxCell.lineTo(i * (this.cellSize / 2), this.cellSize);
            ctxCell.stroke();
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

export { renderGameBoard, resetPanelInfoValues };
