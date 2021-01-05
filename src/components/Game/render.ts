import { levels } from '../../constants/levels';

import {
  GameColors,
  GridDimensions,
  MapObjects,
  StoneLabels,
  STONE_LABEL_FONT,
} from '../../constants/game';

import { getLevelIndexById } from './utils';

function renderGameBoard(): void {
  const appRoot: HTMLElement = document.getElementById('root');
  const gameBoard: HTMLElement = document.createElement('div');
  const gameBoardPanel: HTMLElement = document.createElement('div');
  const gameBoardPanelInfo: HTMLElement = document.createElement('div');
  const panelLevelLabel: HTMLElement = document.createElement('div');
  const panelStepsLabel: HTMLElement = document.createElement('div');
  const panelUndosLabel: HTMLElement = document.createElement('div');

  while (appRoot.firstChild) {
    appRoot.removeChild(appRoot.firstChild);
  }

  gameBoard.className = 'gameBoard';
  this.gameBoardGrid.className = '-grid';
  gameBoardPanel.className = '-panel';
  gameBoardPanelInfo.className = '-info';
  panelLevelLabel.className = '-label';
  panelStepsLabel.className = '-label';
  panelUndosLabel.className = '-label';

  this.staticCanvas.className = '-static-canvas';
  this.ballCanvas.className = '-ball-canvas';
  this.stonesCanvas.className = '-stones-canvas';
  this.panelLevelsValue.className = '-value';
  this.panelStepsValue.className = '-value';
  this.panelUndosValue.className = '-value';
  this.panelGotoButton.className = '-goto';
  this.panelUndoButton.className = '-undo';
  this.panelHelpButton.className = '-help';

  panelLevelLabel.innerText = 'Level:';
  panelStepsLabel.innerText = 'Steps:';
  panelUndosLabel.innerText = 'Undos:';
  this.panelGotoButton.innerText = 'Go to...';
  this.panelUndoButton.innerText = 'Undo';
  this.panelHelpButton.innerText = 'Help';

  this.staticCanvas.width = this.cellSize * GridDimensions.Width;
  this.staticCanvas.height = this.cellSize * GridDimensions.Height;
  this.ballCanvas.width = this.cellSize * GridDimensions.Width;
  this.ballCanvas.height = this.cellSize * GridDimensions.Height;
  this.stonesCanvas.width = this.cellSize * GridDimensions.Width;
  this.stonesCanvas.height = this.cellSize * GridDimensions.Height;

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

  this.gameBoardGrid.appendChild(this.staticCanvas);
  this.gameBoardGrid.appendChild(this.ballCanvas);
  this.gameBoardGrid.appendChild(this.stonesCanvas);
}

function renderMapObjects(gameObjects: number[][] = []): void {
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

      this.stonePositions[y].push(
        currentBoardCell === MapObjects.Nothing || currentBoardCell === MapObjects.Ball
          ? 0
          : currentBoardCell
      );

      switch (currentBoardCell) {
        case MapObjects.Ball:
          this.ballPosition = [y, x];

          renderBall.call(this, ctxBall, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.Exit:
          renderExit.call(this, ctxStatic, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.Wall:
          renderWall.call(this, ctxStatic, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.StoneRegular:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.StoneUp:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'up');
          break;
        case MapObjects.StoneRight:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'right');
          break;
        case MapObjects.StoneDown:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'down');
          break;
        case MapObjects.StoneLeft:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, 'left');
          break;
        default:
          break;
      }
    }
  }
}

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

function renderExit(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const grdX: number = x + this.cellSize / 2;
  const grdY: number = y + this.cellSize / 2;
  const innerRadius: number = this.cellSize / 8;
  const outerRadius: number = this.cellSize / 3;

  const gradient: CanvasGradient = ctx.createRadialGradient(
    grdX,
    grdY,
    innerRadius,
    grdX,
    grdY,
    outerRadius,
  );

  gradient.addColorStop(0, GameColors.ExitGradientInner);
  gradient.addColorStop(1, GameColors.ExitGradientOuter);

  ctx.fillStyle = gradient;

  ctx.beginPath();

  ctx.arc(
    x + this.cellSize / 2,
    y + this.cellSize / 2,
    this.cellSize / 2.5,
    0,
    Math.PI * 2,
    false,
  );

  ctx.fill();
}

function renderWall(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  ctx.fillStyle = GameColors.Wall;

  ctx.fillRect(
    x,
    y ,
    this.cellSize,
    this.cellSize,
  );

  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(
      x,
      y + i * this.cellSize / 4,
    );
    ctx.lineTo(
      x + this.cellSize,
      y + i * this.cellSize / 4,
    );
    ctx.stroke();
  }

  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(
      x + (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
      y + (i - 1) * this.cellSize / 4,
    );
    ctx.lineTo(
      x + (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
      y + (i - 1) * this.cellSize / 4 + this.cellSize / 4,
    );
    ctx.stroke();
  }
}

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

function resetPanelInfoValues(): void {
  this.panelLevelsValue.innerText = this.levelId.toString();
  this.panelStepsValue.innerText = this.stepsCount.toString();
  this.panelUndosValue.innerText = this.undosCount.toString();
}

export {
  renderGameBoard,
  renderMapObjects,
  resetPanelInfoValues,
  renderBall,
  renderExit,
  renderStone,
};
