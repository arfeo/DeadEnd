// tslint:disable:max-file-line-count
import { levels } from '../../constants/levels';
import { GameColors, StoneLabels, GridDimensions, STONE_LABEL_FONT } from '../../constants/game';

import { getLevelIndexById } from './utils';

/**
 * Render the game board infrastructure
 */
function renderGameBoard(): void {
  const appRoot: HTMLElement = document.getElementById('root');
  const gameBoard: HTMLElement = document.createElement('div');
  const gameBoardPanel: HTMLElement = document.createElement('div');
  const gameBoardPanelInfo: HTMLElement = document.createElement('div');
  const panelLevelLabel: HTMLElement = document.createElement('div');
  const panelStepsLabel: HTMLElement = document.createElement('div');
  const panelUndosLabel: HTMLElement = document.createElement('div');

  this.gameBoardGrid = document.createElement('div');
  this.panelLevelsValue = document.createElement('div');
  this.panelStepsValue = document.createElement('div');
  this.panelUndosValue = document.createElement('div');
  this.panelGotoButton = document.createElement('div');
  this.panelUndoButton = document.createElement('div');
  this.panelHelpButton = document.createElement('div');
  this.staticCanvas = document.createElement('canvas');
  this.ballCanvas = document.createElement('canvas');
  this.stonesCanvas = document.createElement('canvas');

  appRoot.innerHTML = '';

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

  appRoot.appendChild(gameBoard);

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
  this.staticCanvas.width = this.cellSize * GridDimensions.Width;
  this.staticCanvas.height = this.cellSize * GridDimensions.Height;

  this.ballCanvas = document.createElement('canvas');
  this.ballCanvas.className = '-ball-canvas';
  this.ballCanvas.width = this.cellSize * GridDimensions.Width;
  this.ballCanvas.height = this.cellSize * GridDimensions.Height;

  this.stonesCanvas = document.createElement('canvas');
  this.stonesCanvas.className = '-stones-canvas';
  this.stonesCanvas.width = this.cellSize * GridDimensions.Width;
  this.stonesCanvas.height = this.cellSize * GridDimensions.Height;

  this.gameBoardGrid.appendChild(this.staticCanvas);
  this.gameBoardGrid.appendChild(this.ballCanvas);
  this.gameBoardGrid.appendChild(this.stonesCanvas);
}

/**
 * Render game objects
 *
 * @param gameObjects
 */
function renderGameObjects(gameObjects: number[][] = []): void {
  const gameObjectsEmpty: boolean = Object.keys(gameObjects).length === 0;
  const boardMap: number[][] = !gameObjectsEmpty ? gameObjects : levels[getLevelIndexById(this.levelId)].boardMap;

  const ctxStatic: CanvasRenderingContext2D = this.staticCanvas.getContext('2d');
  const ctxBall: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ctxStones: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');

  ctxStatic.clearRect(
    0,
    0,
    this.cellSize * GridDimensions.Width,
    this.cellSize * GridDimensions.Height,
  );
  ctxBall.clearRect(
    0,
    0,
    this.cellSize * GridDimensions.Width,
    this.cellSize * GridDimensions.Height,
  );
  ctxStones.clearRect(
    0,
    0,
    this.cellSize * GridDimensions.Width,
    this.cellSize * GridDimensions.Height,
  );

  for (let y = 0; y < GridDimensions.Height; y += 1) {
    this.stonePositions[y] = [];

    for (let x = 0; x < GridDimensions.Width; x += 1) {
      const currentBoardCell: number = boardMap[y][x];

      switch (currentBoardCell) {
        case 1: { // Ball
          this.ballPosition = [y, x];
          this.stonePositions[y].push(0);

          renderBall.call(this, ctxBall, x * this.cellSize, y * this.cellSize);

          break;
        }
        case 2: { // Exit
          this.stonePositions[y].push(currentBoardCell);

          const grdX: number = x * this.cellSize + this.cellSize / 2;
          const grdY: number = y * this.cellSize + this.cellSize / 2;
          const innerRadius: number = this.cellSize / 8;
          const outerRadius: number = this.cellSize / 3;

          const gradient: CanvasGradient = ctxStatic.createRadialGradient(
            grdX,
            grdY,
            innerRadius,
            grdX,
            grdY,
            outerRadius,
          );

          gradient.addColorStop(0, GameColors.ExitGradientInner);
          gradient.addColorStop(1, GameColors.ExitGradientOuter);

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

          ctxStatic.fillStyle = GameColors.Wall;
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
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize);
          break;
        }
        case 5: { // Stone (up arrow)
          this.stonePositions[y].push(currentBoardCell);
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'up');
          break;
        }
        case 6: { // Stone (right arrow)
          this.stonePositions[y].push(currentBoardCell);
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'right');
          break;
        }
        case 7: { // Stone (down arrow)
          this.stonePositions[y].push(currentBoardCell);
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'down');
          break;
        }
        case 8: { // Stone (left arrow)
          this.stonePositions[y].push(currentBoardCell);
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'left');
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
 * Render the Ball
 *
 * @param ctx
 * @param x
 * @param y
 * @param radius
 */
function renderBall(ctx: CanvasRenderingContext2D, x: number, y: number, radius?: number): void {
  const grdX: number = x + this.cellSize / 2;
  const grdY: number = y + this.cellSize / 2;
  const innerRadius: number = this.cellSize / 6;
  const outerRadius: number = this.cellSize / 3;

  ctx.clearRect(
    x - this.cellSize,
    y - this.cellSize,
    this.cellSize * 3,
    this.cellSize * 3,
  );

  const gradient: CanvasGradient = ctx.createRadialGradient(
    grdX,
    grdY,
    innerRadius,
    grdX,
    grdY,
    outerRadius,
  );

  gradient.addColorStop(0, GameColors.BallGradientInner);
  gradient.addColorStop(1, GameColors.BallGradientOuter);

  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.arc(
    x + this.cellSize / 2,
    y + this.cellSize / 2,
    radius || this.cellSize / 2.5,
    0,
    Math.PI * 2,
    false,
  );
  ctx.fill();
}

/**
 * Render stone
 *
 * @param ctx
 * @param x
 * @param y
 * @param direction
 */
function renderStone(ctx: CanvasRenderingContext2D, x: number, y: number, direction?: string): void {
  ctx.fillStyle = GameColors.Stone;

  ctx.fillRect(
    x + 1,
    y + 1,
    this.cellSize - 2,
    this.cellSize - 2,
  );

  if (direction) {
    ctx.fillStyle = GameColors.StoneLabel;
    ctx.font = STONE_LABEL_FONT;

    ctx.fillText(
      StoneLabels[direction.replace(/^\w/, (item: string) => item.toUpperCase()) as keyof typeof StoneLabels],
      x + this.cellSize / (direction === 'up' || direction === 'down' ? 2.5 : 3.5),
      y + this.cellSize / 1.5,
    );
  }
}

/**
 * Set panel info values (level, steps, undos)
 */
function resetPanelInfoValues(): void {
  this.panelLevelsValue.innerText = this.levelId.toString();
  this.panelStepsValue.innerText = this.stepsCount.toString();
  this.panelUndosValue.innerText = this.undosCount.toString();
}

export {
  renderGameBoard,
  renderGameObjects,
  resetPanelInfoValues,
  renderBall,
  renderStone,
};
