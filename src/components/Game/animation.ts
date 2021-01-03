// tslint:disable:max-file-line-count
import { Game } from './index';
import { GameOver } from '../GameOver';

import { APP } from '../../constants/global';
import { levels } from '../../constants/levels';

import { invertDirection, getLevelIndexById } from './utils';
import { renderBall, renderStone } from './render';

function ballMove(direction: string): Promise<void> {
  const ballPosX: number = this.ballPosition[1];
  const ballPosY: number = this.ballPosition[0];
  let ballX: number = ballPosX * this.cellSize;
  let ballY: number = ballPosY * this.cellSize;

  switch (direction) {
    case 'up': {
      const nextCell: number = this.stonePositions[ballPosY - 1][ballPosX];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY + 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'right': {
      const nextCell: number = this.stonePositions[ballPosY][ballPosX + 1];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY][ballPosX - 1] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'down': {
      const nextCell: number = this.stonePositions[ballPosY + 1][ballPosX];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY - 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'left': {
      const nextCell: number = this.stonePositions[ballPosY][ballPosX - 1];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY][ballPosX + 1] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    default: break;
  }

  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const speedCorrection = 5;
  let step = 0;

  this.isBallMoving = true;

  const animateBallMove = (): Promise<void> => {
    step += speedCorrection;

    if (step > this.cellSize) {
      cancelAnimationFrame(this.ballAnimationId);

      this.isBallMoving = false;

      if (direction === 'right' || direction === 'left') {
        this.ballPosition[1] += direction === 'right' ? 1 : -1;
      } else {
        this.ballPosition[0] += direction === 'down' ? 1 : -1;
      }

      if (levels[getLevelIndexById(this.levelId)].boardMap[this.ballPosition[0]][this.ballPosition[1]] === 2) {
        return ballTransport.call(this);
      }

      return Promise.resolve();
    }

    if (direction === 'right' || direction === 'left') {
      ballX += speedCorrection * (direction === 'right' ? 1 : -1);
    } else {
      ballY += speedCorrection * (direction === 'down' ? 1 : -1);
    }

    renderBall.call(this, ctx, ballX, ballY);

    this.ballAnimationId = requestAnimationFrame(animateBallMove);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallMove);

  return Promise.resolve();
}

function ballHit(startDirection: string): Promise<void> {
  const ballPosX: number = this.ballPosition[1];
  const ballPosY: number = this.ballPosition[0];
  let ballX: number = ballPosX * this.cellSize;
  let ballY: number = ballPosY * this.cellSize;

  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  let direction = invertDirection(startDirection);
  let step = 0;

  this.isBallMoving = true;

  const animateBallHit = (): Promise<void> => {
    const speedCorrection: number = startDirection !== direction ? 3 : 6;

    step += speedCorrection;

    if (step >= this.cellSize) {
      if (startDirection !== direction) {
        step = 0;

        direction = invertDirection(direction);
      } else {
        cancelAnimationFrame(this.ballAnimationId);

        this.isBallMoving = false;

        return testStoneMove.call(this, ballPosX, ballPosY, direction);
      }
    }

    if (direction === 'right' || direction === 'left') {
      ballX += speedCorrection * (direction === 'right' ? 1 : -1);
    } else {
      ballY += speedCorrection * (direction === 'down' ? 1 : -1);
    }

    renderBall.call(this, ctx, ballX, ballY);

    this.ballAnimationId = requestAnimationFrame(animateBallHit);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallHit);

  return Promise.resolve();
}

function testStoneMove(posX: number, posY: number, direction: string): Promise<Array<Promise<void>>> {
  const levelIndex: number = getLevelIndexById(this.levelId);

  switch (direction) {
    case 'up': {
      const stoneType: number = this.stonePositions[posY - 1][posX];
      const isNextToNextCellEmpty: boolean = this.stonePositions[posY - 2][posX] === 0;
      const isNextCellWall: boolean = levels[levelIndex].boardMap[posY - 1][posX] === 3;
      const isNextToNextCellExit: boolean = levels[levelIndex].boardMap[posY - 2][posX] === 2;
      const isMovableStone: boolean = stoneType === 4 || stoneType === 5;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY - 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'right': {
      const stoneType: number = this.stonePositions[posY][posX + 1];
      const isNextToNextCellEmpty: boolean = this.stonePositions[posY][posX + 2] === 0;
      const isNextCellWall: boolean = levels[levelIndex].boardMap[posY][posX + 1] === 3;
      const isNextToNextCellExit: boolean = levels[levelIndex].boardMap[posY][posX + 2] === 2;
      const isMovableStone: boolean = stoneType === 4 || stoneType === 6;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX + 1, y: posY }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'down': {
      const stoneType: number = this.stonePositions[posY + 1][posX];
      const isNextToNextCellEmpty: boolean = this.stonePositions[posY + 2][posX] === 0;
      const isNextCellWall: boolean = levels[levelIndex].boardMap[posY + 1][posX] === 3;
      const isNextToNextCellExit: boolean = levels[levelIndex].boardMap[posY + 2][posX] === 2;
      const isMovableStone: boolean = stoneType === 4 || stoneType === 7;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY + 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'left': {
      const stoneType: number = this.stonePositions[posY][posX - 1];
      const isNextToNextCellEmpty: boolean = this.stonePositions[posY][posX - 2] === 0;
      const isNextCellWall: boolean = levels[levelIndex].boardMap[posY][posX - 1] === 3;
      const isNextToNextCellExit: boolean = levels[levelIndex].boardMap[posY][posX - 2] === 2;
      const isMovableStone: boolean = stoneType === 4 || stoneType === 8;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX - 1, y: posY }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    default: return null as Promise<Array<Promise<void>>>;
  }
}

async function stoneMove(position: { x: number; y: number }, direction: string): Promise<void> {
  const ctx: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');
  const stoneType: number = this.stonePositions[position.y][position.x];
  const speedCorrection = 5;
  let step = 0;

  let stoneX: number = position.x * this.cellSize;
  let stoneY: number = position.y * this.cellSize;

  let moveX: number = position.x;
  let moveY: number = position.y;

  const undoHistoryItem: number[][] = JSON.parse(JSON.stringify(this.stonePositions));
  const ballX: number = this.ballPosition[1];
  const ballY: number = this.ballPosition[0];

  undoHistoryItem[ballY][ballX] = 1;

  this.undoHistoryMap.push(undoHistoryItem);

  if (direction === 'right' || direction === 'left') {
    moveX += direction === 'right' ? 1 : -1;
  } else {
    moveY += direction === 'down' ? 1 : -1;
  }

  this.stonePositions[position.y][position.x] = 0;
  this.stonePositions[moveY][moveX] = stoneType;

  const animateStoneMove = (): Promise<void> => {
    step += speedCorrection;

    if (step > this.cellSize) {
      cancelAnimationFrame(this.stoneAnimationId);

      return Promise.resolve();
    }

    ctx.clearRect(
      stoneX,
      stoneY,
      this.cellSize,
      this.cellSize,
    );

    if (direction === 'right' || direction === 'left') {
      stoneX += speedCorrection * (direction === 'right' ? 1 : -1);
    } else {
      stoneY += speedCorrection * (direction === 'down' ? 1 : -1);
    }

    renderStone.call(this, ctx, stoneX, stoneY, stoneType !== 4 ? direction : null);

    this.stoneAnimationId = requestAnimationFrame(animateStoneMove);
  };

  this.stoneAnimationId = requestAnimationFrame(animateStoneMove);

  return Promise.resolve();
}

function ballTransport(): Promise<void> {
  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ballX: number = this.ballPosition[1] * this.cellSize;
  const ballY: number = this.ballPosition[0] * this.cellSize;
  let step = 0;

  this.isBallMoving = true;

  const animateBallTransport = (): Promise<void> => {
    const initialRadius: number = this.cellSize / 2.5;

    step += 1;

    if (step > initialRadius) {
      cancelAnimationFrame(this.ballAnimationId);

      this.isBallMoving = false;

      if (getLevelIndexById(this.levelId + 1) > -1) {
        this.destroy();

        APP.pageInstance = new Game(this.levelId + 1);
      } else {
        new GameOver(this);

        this.isGameOver = true;
      }

      return Promise.resolve();
    }

    renderBall.call(this, ctx, ballX, ballY, initialRadius - step);

    this.ballAnimationId = requestAnimationFrame(animateBallTransport);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallTransport);

  return Promise.resolve();
}

export {
  ballMove,
  ballTransport,
};
