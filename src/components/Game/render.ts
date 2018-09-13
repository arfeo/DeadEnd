import { levels } from '../../constants/levels';

export function renderGameBoard() {
  /**
   * Set up game board infrastructure
   */
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

  /**
   * Place game board objects
   */
  const ctxBall: CanvasRenderingContext2D = this.ballCanvas.getContext('2d');
  const ctxStones: CanvasRenderingContext2D = this.stonesCanvas.getContext('2d');

  for (let y = 0; y < 20; y += 1) {
    for (let x = 0; x < 32; x += 1) {
      const cell: HTMLCanvasElement = document.createElement('canvas');

      cell.id = `cell-${y}-${x}`;
      cell.className = '-cell';
      cell.width = this.cellSize;
      cell.height = this.cellSize;

      gameBoardGrid.appendChild(cell);

      const ctxCell: CanvasRenderingContext2D = cell.getContext('2d');
      const currentBoardCell: number = levels[this.levelId - 1].board[y][x];

      switch (currentBoardCell) {
        case 1: { // Ball
          this.ballPosition = [y, x];

          ctxBall.fillStyle = 'cyan';
          ctxBall.beginPath();
          ctxBall.arc(
            x * this.cellSize + this.cellSize / 2,
            y * this.cellSize + this.cellSize / 2,
            this.cellSize / 3,
            0,
            Math.PI * 2,
            false,
          );
          ctxBall.fill();

          break;
        }
        case 2: { // Exit
          ctxCell.fillStyle = 'gold';
          ctxCell.beginPath();
          ctxCell.arc(
            this.cellSize / 2,
            this.cellSize / 2,
            this.cellSize / 3,
            0,
            Math.PI * 2,
            false,
          );
          ctxCell.fill();

          break;
        }
        case 3: { // Wall
          ctxCell.fillStyle = 'red';
          ctxCell.fillRect(
            0,
            0,
            this.cellSize,
            this.cellSize,
          );

          break;
        }
        case 4: { // Stone (regular)
          ctxStones.fillStyle = 'grey';
          ctxStones.fillRect(
            x * this.cellSize + 1,
            y * this.cellSize + 1,
            this.cellSize - 2,
            this.cellSize - 2,
          );

          break;
        }
        default: break;
      }
    }
  }
}

export function resetPanelInfoValues() {
  this.panelLevelsValue.innerText = this.levelId.toString();
  this.panelStepsValue.innerText = this.stepsCount.toString();
  this.panelUndosValue.innerText = this.undosCount.toString();
}
