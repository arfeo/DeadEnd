export function ballMove(direction: string): Promise<void> {
  const ballPosX = this.ballPosition[1];
  const ballPosY = this.ballPosition[0];
  let ballX = ballPosX * this.cellSize;
  let ballY = ballPosY * this.cellSize;

  switch (direction) {
    case 'up': {
      if (this.stonePositions[ballPosY - 1][ballPosX] !== 0) {
        return Promise.reject();
      }

      break;
    }
    case 'right': {
      if (this.stonePositions[ballPosY][ballPosX + 1] !== 0) {
        return Promise.reject();
      }

      break;
    }
    case 'down': {
      if (this.stonePositions[ballPosY + 1][ballPosX] !== 0) {
        return Promise.reject();
      }

      break;
    }
    case 'left': {
      if (this.stonePositions[ballPosY][ballPosX - 1] !== 0) {
        return Promise.reject();
      }

      break;
    }
    default: break;
  }

  const ctx: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const speedCorrection = 4;
  let step = 0;

  ctx.fillStyle = 'cyan';

  this.isBallMoving = true;

  const ballMoveLeft = (): Promise<void> => {
    step += speedCorrection;

    if (step > this.cellSize) {
      cancelAnimationFrame(this.animationId);

      this.isBallMoving = false;

      if (direction === 'right' || direction === 'left') {
        this.ballPosition[1] += direction === 'right' ? 1 : -1;
      } else {
        this.ballPosition[0] += direction === 'down' ? 1 : -1;
      }

      return Promise.resolve();
    }

    ctx.clearRect(
      ballX,
      ballY,
      this.cellSize,
      this.cellSize,
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
      this.cellSize / 2,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    this.animationId = requestAnimationFrame(ballMoveLeft);
  };

  this.animationId = requestAnimationFrame(ballMoveLeft);

  return Promise.resolve();
}
