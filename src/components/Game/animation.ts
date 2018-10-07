// tslint:disable:max-file-line-count
import { cloneDeep } from 'lodash';

import { Game } from './index';
import { GameOver } from '../GameOver';

import { globals } from '../../constants/globals';
import { levels } from '../../constants/levels';
import { gameColors, stoneLabels, STONE_LABEL_FONT } from '../../constants/game';

import { invertDirection, levelIndexById } from './utils';
import { renderBall, renderStone } from './render';

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
      const nextCell = this.stonePositions[ballPosY - 1][ballPosX];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY + 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'right': {
      const nextCell = this.stonePositions[ballPosY][ballPosX + 1];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY][ballPosX - 1] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'down': {
      const nextCell = this.stonePositions[ballPosY + 1][ballPosX];

      if (nextCell !== 0 && nextCell !== 2) {
        if (this.stonePositions[ballPosY - 1][ballPosX] !== 0) {
          return Promise.reject();
        }

        return ballHit.call(this, direction);
      }

      break;
    }
    case 'left': {
      const nextCell = this.stonePositions[ballPosY][ballPosX - 1];

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

      if (levels[levelIndexById(this.levelId)].boardMap[this.ballPosition[0]][this.ballPosition[1]] === 2) {
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

  this.isBallMoving = true;

  const animateBallHit = (): Promise<void> => {
    const speedCorrection = startDirection !== direction ? 3 : 6;

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

/**
 * Move a stone if possible
 *
 * @param posX
 * @param posY
 * @param direction
 */
function testStoneMove(posX: number, posY: number, direction: string): Promise<Array<Promise<void>>> {
  const levelIndex = levelIndexById(this.levelId);

  switch (direction) {
    case 'up': {
      const stoneType = this.stonePositions[posY - 1][posX];
      const isNextToNextCellEmpty = this.stonePositions[posY - 2][posX] === 0;
      const isNextCellWall = levels[levelIndex].boardMap[posY - 1][posX] === 3;
      const isNextToNextCellExit = levels[levelIndex].boardMap[posY - 2][posX] === 2;
      const isMovableStone = stoneType === 4 || stoneType === 5;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY - 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'right': {
      const stoneType = this.stonePositions[posY][posX + 1];
      const isNextToNextCellEmpty = this.stonePositions[posY][posX + 2] === 0;
      const isNextCellWall = levels[levelIndex].boardMap[posY][posX + 1] === 3;
      const isNextToNextCellExit = levels[levelIndex].boardMap[posY][posX + 2] === 2;
      const isMovableStone = stoneType === 4 || stoneType === 6;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX + 1, y: posY }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'down': {
      const stoneType = this.stonePositions[posY + 1][posX];
      const isNextToNextCellEmpty = this.stonePositions[posY + 2][posX] === 0;
      const isNextCellWall = levels[levelIndex].boardMap[posY + 1][posX] === 3;
      const isNextToNextCellExit = levels[levelIndex].boardMap[posY + 2][posX] === 2;
      const isMovableStone = stoneType === 4 || stoneType === 7;

      if (isNextToNextCellEmpty && !isNextCellWall && !isNextToNextCellExit && isMovableStone) {
        return Promise.all([
          stoneMove.call(this, { x: posX, y: posY + 1 }, direction),
          ballMove.call(this, direction),
        ]);
      }

      break;
    }
    case 'left': {
      const stoneType = this.stonePositions[posY][posX - 1];
      const isNextToNextCellEmpty = this.stonePositions[posY][posX - 2] === 0;
      const isNextCellWall = levels[levelIndex].boardMap[posY][posX - 1] === 3;
      const isNextToNextCellExit = levels[levelIndex].boardMap[posY][posX - 2] === 2;
      const isMovableStone = stoneType === 4 || stoneType === 8;

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

/**
 * Animate stone move
 *
 * @param position
 * @param direction
 */
async function stoneMove(position: { x: number; y: number }, direction: string): Promise<void> {
  const ctx: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');
  const stoneType: number = this.stonePositions[position.y][position.x];
  const speedCorrection = 5;
  let step = 0;

  let stoneX: number = position.x * this.cellSize;
  let stoneY: number = position.y * this.cellSize;

  let moveX: number = position.x;
  let moveY: number = position.y;

  const undoHistoryItem = cloneDeep(this.stonePositions);
  const ballX = this.ballPosition[1];
  const ballY = this.ballPosition[0];

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

    renderStone.call(this, ctx, stoneX, stoneY);

    if (stoneType !== 4) {
      ctx.fillStyle = gameColors.StoneLabel;
      ctx.font = STONE_LABEL_FONT;

      switch (direction) {
        case 'up': {
          ctx.fillText(
            stoneLabels.Up,
            stoneX + this.cellSize / 2.5,
            stoneY + this.cellSize / 1.5,
          );

          break;
        }
        case 'right': {
          ctx.fillText(
            stoneLabels.Right,
            stoneX + this.cellSize / 3.5,
            stoneY + this.cellSize / 1.5,
          );

          break;
        }
        case 'down': {
          ctx.fillText(
            stoneLabels.Down,
            stoneX + this.cellSize / 2.5,
            stoneY + this.cellSize / 1.5,
          );

          break;
        }
        case 'left': {
          ctx.fillText(
            stoneLabels.Left,
            stoneX + this.cellSize / 3.5,
            stoneY + this.cellSize / 1.5,
          );

          break;
        }
        default: break;
      }
    }

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

export { ballMove };
