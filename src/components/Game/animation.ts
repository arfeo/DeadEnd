// tslint:disable:max-file-line-count
import { Game } from './index';

import { globals } from '../../constants/globals';
import { levels } from '../../constants/levels';

import { invertDirection, levelIndexById } from './utils';

/**
 * Animate the ball move
 *
 * @param direction
 */
function ballMove(direction: string): Promise<void> {
  const ballPosX = this.ballPosition[1];
  const ballPosY = this.ballPosition[0];
  let ballX = ballPosX * this.cellSize;
  let ballY = ballPosY * this.cellSize;

  switch (direction) {
    case 'up': {
      if (this.stonePositions[ballPosY - 1][ballPosX] !== 0) {
        if (this.stonePositions[ballPosY + 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'right': {
      if (this.stonePositions[ballPosY][ballPosX + 1] !== 0) {
        if (this.stonePositions[ballPosY][ballPosX - 1] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'down': {
      if (this.stonePositions[ballPosY + 1][ballPosX] !== 0) {
        if (this.stonePositions[ballPosY - 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'left': {
      if (this.stonePositions[ballPosY][ballPosX - 1] !== 0) {
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

  ctx.fillStyle = 'cyan';

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

      if (levels[levelIndexById(this.levelId)].boardMap[this.ballPosition[0]][this.ballPosition[1]] === 2) {
        return ballTransport.call(this);
      }

      return Promise.resolve();
    }

    ctx.clearRect(
      ballX - this.cellSize,
      ballY - this.cellSize,
      this.cellSize * 3,
      this.cellSize * 3,
    );

    if (direction === 'right' || direction === 'left') {
      ballX += speedCorrection * (direction === 'right' ? 1 : -1);
    } else {
      ballY += speedCorrection * (direction === 'down' ? 1 : -1);
    }

    ctx.beginPath();
    ctx.arc(
      ballX + this.cellSize / 2,
      ballY + this.cellSize / 2,
      this.cellSize / 2.5,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    this.ballAnimationId = requestAnimationFrame(animateBallMove);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallMove);

  return Promise.resolve();
}

/**
 * Animate the ball's hit
 *
 * @param startDirection
 */
function ballHit(startDirection: string): Promise<void> {
  const ballPosX = this.ballPosition[1];
  const ballPosY = this.ballPosition[0];
  let ballX = ballPosX * this.cellSize;
  let ballY = ballPosY * this.cellSize;

  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  let direction = invertDirection(startDirection);
  let step = 0;

  ctx.fillStyle = 'cyan';

  this.isBallMoving = true;

  const animateBallHit = (): Promise<void> => {
    const speedCorrection = startDirection !== direction ? 3 : 6;

    step += speedCorrection;

    if (step > this.cellSize) {
      if (startDirection !== direction) {
        step = 0;

        direction = invertDirection(direction);
      } else {
        cancelAnimationFrame(this.ballAnimationId);

        this.isBallMoving = false;

        return testStoneMove.call(this, ballPosX, ballPosY, direction);
      }
    }

    ctx.clearRect(
      ballX - this.cellSize,
      ballY - this.cellSize,
      this.cellSize * 3,
      this.cellSize * 3,
    );

    if (direction === 'right' || direction === 'left') {
      ballX += speedCorrection * (direction === 'right' ? 1 : -1);
    } else {
      ballY += speedCorrection * (direction === 'down' ? 1 : -1);
    }

    ctx.beginPath();
    ctx.arc(
      ballX + this.cellSize / 2,
      ballY + this.cellSize / 2,
      this.cellSize / 2.5,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    this.ballAnimationId = requestAnimationFrame(animateBallHit);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallHit);

  return Promise.resolve();
}

/**
 * Move a stone if possible
 *
 * @param posX
 * @param posY
 * @param direction
 */
function testStoneMove(posX: number, posY: number, direction: string): Promise<any[]> {
  const levelIndex = levelIndexById(this.levelId);

  switch (direction) {
    case 'up': {
      if (this.stonePositions[posY - 2][posX] === 0 && levels[levelIndex].boardMap[posY - 1][posX] !== 3) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY - 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'right': {
      if (this.stonePositions[posY][posX + 2] === 0 && levels[levelIndex].boardMap[posY][posX + 1] !== 3) {
        return Promise.all([
          stoneMove.call(this, { x: posX + 1, y: posY }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'down': {
      if (this.stonePositions[posY + 2][posX] === 0 && levels[levelIndex].boardMap[posY + 1][posX] !== 3) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY + 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'left': {
      if (this.stonePositions[posY][posX - 2] === 0 && levels[levelIndex].boardMap[posY][posX - 1] !== 3) {
        return Promise.all([
          stoneMove.call(this, { x: posX - 1, y: posY }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    default: return;
  }
}

/**
 * Animate stone move
 *
 * @param position
 * @param direction
 */
function stoneMove(position: { x: number; y: number }, direction: string): Promise<void> {
  const ctx: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');
  const stoneType: number = this.stonePositions[position.y][position.x];
  const speedCorrection = 5;
  let stoneX: number = position.x * this.cellSize;
  let stoneY: number = position.y * this.cellSize;
  let step = 0;

  ctx.fillStyle = 'grey';

  let moveX: number = position.x;
  let moveY: number = position.y;

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

    ctx.fillRect(
      stoneX + 1,
      stoneY + 1,
      this.cellSize - 2,
      this.cellSize - 2,
    );

    this.stoneAnimationId = requestAnimationFrame(animateStoneMove);
  };

  this.stoneAnimationId = requestAnimationFrame(animateStoneMove);

  return Promise.resolve();
}

/**
 * Animate the ball transportation
 */
export function ballTransport(): Promise<void> {
  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ballX = this.ballPosition[1] * this.cellSize;
  const ballY = this.ballPosition[0] * this.cellSize;
  let step = 0;

  ctx.fillStyle = 'cyan';

  this.isBallMoving = true;

  const animateBallTransport = (): Promise<void> => {
    const initialRadius = this.cellSize / 2.5;

    step += 1;

    if (step > initialRadius) {
      cancelAnimationFrame(this.ballAnimationId);

      this.isBallMoving = false;

      if (levelIndexById(this.levelId + 1) > -1) {
        this.destroy();

        globals.pageInstance = new Game(this.levelId + 1);
      } else {
        alert('Game over');

        this.isGameOver = true;
      }

      return Promise.resolve();
    }

    ctx.clearRect(
      ballX - this.cellSize,
      ballY - this.cellSize,
      this.cellSize * 3,
      this.cellSize * 3,
    );

    ctx.beginPath();
    ctx.arc(
      ballX + this.cellSize / 2,
      ballY + this.cellSize / 2,
      initialRadius - step,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    this.ballAnimationId = requestAnimationFrame(animateBallTransport);
  };

  this.ballAnimationId = requestAnimationFrame(animateBallTransport);

  return Promise.resolve();
}

export { ballMove };
