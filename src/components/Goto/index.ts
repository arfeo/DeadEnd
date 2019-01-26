import { Modal } from '../common/Modal';
import { Game } from '../Game';

import { levels } from '../../constants/levels';
import { globals } from '../../constants/globals';

import { levelIndexById } from '../Game/utils';

class Goto extends Modal {
  constructor(game: Game) {
    super(game, 'small');
  }

  render() {
    const gotoModalLabel: HTMLElement = document.createElement('div');
    const gotoForm: HTMLElement = document.createElement('div');
    const gotoInputContainer: HTMLElement = document.createElement('div');
    const gotoLabel: HTMLElement = document.createElement('div');
    const gotoInput: HTMLInputElement = document.createElement('input');
    const gotoSubmitContainer: HTMLElement = document.createElement('div');
    const gotoSubmitButton: HTMLButtonElement = document.createElement('button');
    const gotoCancelButton: HTMLButtonElement = document.createElement('button');

    gotoModalLabel.innerHTML = `<strong>Go to level (1—${levels.length}):</strong>`;
    gotoForm.className = 'goto-form';
    gotoInputContainer.className = '-input-container';
    gotoLabel.className = '-label';
    gotoLabel.innerText = 'Level:';
    gotoInput.className = '-input';
    gotoSubmitContainer.className = 'modal-submit';
    gotoSubmitButton.className = '-button';
    gotoSubmitButton.innerText = 'Go to';
    gotoCancelButton.className = '-button';
    gotoCancelButton.innerText = 'Cancel';

    this.modal.appendChild(gotoModalLabel);
    this.modal.appendChild(gotoForm);
    gotoForm.appendChild(gotoInputContainer);
    gotoInputContainer.appendChild(gotoLabel);
    gotoInputContainer.appendChild(gotoInput);
    gotoForm.appendChild(gotoSubmitContainer);
    gotoSubmitContainer.appendChild(gotoSubmitButton);
    gotoSubmitContainer.appendChild(gotoCancelButton);
    gotoInput.focus();

    gotoSubmitButton.addEventListener('click', () => {
      const inputValue: string = gotoInput.value;

      if (!inputValue) {
        alert('Enter level #');

        gotoInput.focus();

        return;
      }

      if (levelIndexById(parseInt(inputValue)) === -1) {
        alert(`Level # ${inputValue} does not exist`);

        gotoInput.value = '';
        gotoInput.focus();

        return;
      }

      this.game.destroy();

      globals.pageInstance = new Game(parseInt(inputValue));

      this.close();
    });

    gotoCancelButton.addEventListener('click', () => this.close());
  }
}

export { Goto };
