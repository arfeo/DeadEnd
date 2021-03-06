import { levels } from '../../constants/levels';
import { Directions, GridDimensions, MapObjects } from '../../constants/game';

import { getLevelIndexById } from './utils';
import { drawCircle, drawLineToAngle, drawRectangle, drawTriangle } from '../../utils/drawing';

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
          this.exitPosition = [y, x];

          renderExit.call(this, ctxStatic);
          break;
        case MapObjects.Wall:
          renderWall.call(this, ctxStatic, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.StoneRegular:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize);
          break;
        case MapObjects.StoneUp:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, Directions.Up);
          break;
        case MapObjects.StoneRight:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, Directions.Right);
          break;
        case MapObjects.StoneDown:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, Directions.Down);
          break;
        case MapObjects.StoneLeft:
          renderStone.call(this, ctxStones, x * this.cellSize, y * this.cellSize, Directions.Left);
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

  gradient.addColorStop(0, 'rgb(0, 191, 255)');
  gradient.addColorStop(1, 'rgb(65, 105, 225)');

  drawCircle(
    ctx,
    x + this.cellSize / 2,
    y + this.cellSize / 2,
    radius || this.cellSize / 2.5,
    {
      fillColor: gradient,
    },
  );
}

function renderExit(ctx: CanvasRenderingContext2D): void {
  const [exitY, exitX] = this.exitPosition;
  const x: number = exitX * this.cellSize;
  const y: number = exitY * this.cellSize;
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

  gradient.addColorStop(0, 'rgb(255, 0, 0)');
  gradient.addColorStop(1, 'rgb(255, 215, 0)');

  drawCircle(
    ctx,
    x + this.cellSize / 2,
    y + this.cellSize / 2,
    this.cellSize / 2.5,
    {
      fillColor: gradient,
    },
  );
}

function renderWall(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  drawRectangle(
    ctx,
    x,
    y ,
    this.cellSize,
    this.cellSize,
    {
      fillColor: 'rgb(255, 0, 0)',
    },
  );

  for (let i = 1; i <= 4; i += 1) {
    drawLineToAngle(
      ctx,
      x,
      y + i * this.cellSize / 4,
      this.cellSize,
      0,
      {
        edgingColor: 'rgb(0, 0, 0)',
      },
    );
  }

  for (let i = 1; i <= 4; i += 1) {
    drawLineToAngle(
      ctx,
      x + (i % 2 === 0 ? 1 : 2) * this.cellSize / 2,
      y + (i - 1) * this.cellSize / 4,
      this.cellSize / 4,
      90,
      {
        edgingColor: 'rgb(0, 0, 0)',
      },
    );
  }
}

function renderStone(ctx: CanvasRenderingContext2D, x: number, y: number, direction?: Directions): void {
  drawRectangle(
    ctx,
    x + 1,
    y + 1,
    this.cellSize - 2,
    this.cellSize - 2,
    {
      fillColor: 'rgb(128, 128, 128)',
    },
  );

  drawLineToAngle(
    ctx,
    x + this.cellSize / 16,
    y + this.cellSize / 16,
    this.cellSize - this.cellSize / 8,
    0,
    {
      edgingWidth: this.cellSize / 8,
      edgingColor: 'rgb(255, 255, 255)',
    },
  );

  drawLineToAngle(
    ctx,
    x + this.cellSize / 16,
    y + this.cellSize / 16,
    this.cellSize - this.cellSize / 8,
    90,
    {
      edgingWidth: this.cellSize / 8,
      edgingColor: 'rgb(255, 255, 255)',
    },
  );

  drawLineToAngle(
    ctx,
    x + this.cellSize - this.cellSize / 16,
    y + this.cellSize - this.cellSize / 16,
    this.cellSize - this.cellSize / 8,
    180,
    {
      edgingWidth: this.cellSize / 8,
      edgingColor: 'rgb(70, 70, 70)',
    },
  );

  drawLineToAngle(
    ctx,
    x + this.cellSize - this.cellSize / 16,
    y + this.cellSize - this.cellSize / 16,
    this.cellSize - this.cellSize / 8,
    -90,
    {
      edgingWidth: this.cellSize / 8,
      edgingColor: 'rgb(70, 70, 70)',
    },
  );

  if (direction) {
    if (direction === Directions.Up || direction === Directions.Down) {
      drawLineToAngle(
        ctx,
        x + this.cellSize / 2,
        y + this.cellSize / 4,
        this.cellSize / 2,
        90,
        {
          edgingWidth: this.cellSize / 20,
          edgingColor: 'rgb(10, 10, 10)',
        },
      );

      drawTriangle(
        ctx,
        direction === Directions.Up
          ? [x + this.cellSize / 2, y + this.cellSize / 4]
          : [x + this.cellSize / 2, y + this.cellSize - this.cellSize / 4],
        [x + this.cellSize - this.cellSize / 4, y + this.cellSize / 2],
        [x + this.cellSize / 4, y + this.cellSize / 2],
        {
          fillColor: 'rgb(10, 10, 10)',
        },
      );
    } else {
      drawLineToAngle(
        ctx,
        x + this.cellSize / 4,
        y + this.cellSize / 2,
        this.cellSize / 2,
        0,
        {
          edgingWidth: this.cellSize / 20,
          edgingColor: 'rgb(10, 10, 10)',
        },
      );

      drawTriangle(
        ctx,
        direction === Directions.Left
          ? [x + this.cellSize / 4, y + this.cellSize / 2]
          : [x + this.cellSize - this.cellSize / 4, y + this.cellSize / 2],
        [x + this.cellSize / 2, y + this.cellSize / 4],
        [x + this.cellSize / 2, y + this.cellSize - this.cellSize / 4],
        {
          fillColor: 'rgb(10, 10, 10)',
        },
      );
    }
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
  renderStone,
};
