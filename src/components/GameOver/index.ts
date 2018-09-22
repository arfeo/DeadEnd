import { Modal } from '../common/Modal';
import { Game } from '../Game';

import { globals } from '../../constants/globals';

class GameOver extends Modal {
  constructor(game: Game) {
    super(game);
  }

  render() {
    const gameOverLabel: HTMLElement = document.createElement('div');
    const gameOverSubmitContainer: HTMLElement = document.createElement('div');
    const gameOverSubmitRestart: HTMLButtonElement = document.createElement('button');
    const gameOverSubmitStop: HTMLButtonElement = document.createElement('button');

    gameOverLabel.innerText = 'Game over. Would you like to start the game over again?';

    gameOverSubmitContainer.className = 'modal-submit';

    gameOverSubmitRestart.className = '-button';
    gameOverSubmitRestart.innerText = 'Yes';

    gameOverSubmitStop.className = '-button';
    gameOverSubmitStop.innerText = 'No, thanks';

    this.modal.appendChild(gameOverLabel);
    this.modal.appendChild(gameOverSubmitContainer);
    gameOverSubmitContainer.appendChild(gameOverSubmitRestart);
    gameOverSubmitContainer.appendChild(gameOverSubmitStop);

    gameOverSubmitRestart.addEventListener('click', () => {
      this.game.destroy();

      globals.pageInstance = new Game();

      this.close();
    });

    gameOverSubmitStop.addEventListener('click', () => {
      this.close();
    });
  }
}

export { GameOver };
