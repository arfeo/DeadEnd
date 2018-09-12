class Game {
  appRoot: HTMLElement;
  panelLevelsValue: HTMLElement;
  panelStepsValue: HTMLElement;
  panelUndosValue: HTMLElement;
  levelNum: number;
  stepsCount: number;
  undosCount: number;

  constructor(levelNum = 1, stepsCount = 0, undosCount = 0) {
    this.appRoot = document.getElementById('root');
    this.panelLevelsValue = document.createElement('div');
    this.panelStepsValue = document.createElement('div');
    this.panelUndosValue = document.createElement('div');

    this.levelNum = levelNum;
    this.stepsCount = stepsCount;
    this.undosCount = undosCount;

    this.render();
  }

  resetPanelInfoValues() {
    this.panelLevelsValue.innerText = this.levelNum.toString();
    this.panelStepsValue.innerText = this.stepsCount.toString();
    this.panelUndosValue.innerText = this.undosCount.toString();
  }

  renderGameBoard() {
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
  }

  render() {
    this.renderGameBoard();
    this.resetPanelInfoValues();
  }
}

export { Game };
