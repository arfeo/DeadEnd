import { isEmpty, findIndex } from 'lodash';

import { Modal } from '../common/Modal';
import { Game } from '../Game';

import { levels } from '../../constants/levels';
import { globals } from '../../constants/globals';

class Goto extends Modal {
  constructor(game: Game) {
    super(game, 'small');
  }

  render() {
    const gotoForm: HTMLElement = document.createElement('div');
    const gotoInputContainer: HTMLElement = document.createElement('div');
    const gotoLabel: HTMLElement = document.createElement('div');
    const gotoInput: HTMLInputElement = document.createElement('input');
    const gotoSubmitContainer: HTMLElement = document.createElement('div');
    const gotoSubmitButton: HTMLButtonElement = document.createElement('button');

    gotoForm.className = 'goto-form';

    gotoInputContainer.className = '-input-container';

    gotoLabel.className = '-label';
    gotoLabel.innerText = 'Level:';

    gotoInput.className = '-input';

    gotoSubmitContainer.className = '-submit-container';

    gotoSubmitButton.className = '-button';
    gotoSubmitButton.innerText = 'Go to';

    this.modal.appendChild(gotoForm);
    gotoForm.appendChild(gotoInputContainer);
    gotoInputContainer.appendChild(gotoLabel);
    gotoInputContainer.appendChild(gotoInput);
    gotoForm.appendChild(gotoSubmitContainer);
    gotoSubmitContainer.appendChild(gotoSubmitButton);
    gotoInput.focus();

    gotoSubmitButton.addEventListener('click', () => {
      const inputValue = gotoInput.value;

      if (isEmpty(inputValue)) {
        alert('Enter level #');

        gotoInput.focus();

        return;
      }

      if (findIndex(levels, { id: parseInt(inputValue) }) === -1) {
        alert(`Level # ${inputValue} does not exist`);

        gotoInput.value = '';
        gotoInput.focus();

        return;
      }

      this.game.destroy();

      globals.pageInstance = new Game(parseInt(inputValue));

      this.close();
    });
  }
}

export { Goto };
