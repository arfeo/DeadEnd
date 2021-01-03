import { Modal } from '../common/Modal';
import { Game } from '../Game';

import { levels } from '../../constants/levels';

import { getLevelIndexById } from '../Game/utils';

class Goto extends Modal {
  constructor(game: Game) {
    super(game, 'small');
  }

  render(): void {
    const gotoModalLabel: HTMLElement = document.createElement('div');
    const gotoForm: HTMLElement = document.createElement('div');
    const gotoInputContainer: HTMLElement = document.createElement('div');
    const gotoInput: HTMLInputElement = document.createElement('input');
    const gotoSubmitContainer: HTMLElement = document.createElement('div');
    const gotoSubmitButton: HTMLButtonElement = document.createElement('button');
    const gotoCancelButton: HTMLButtonElement = document.createElement('button');

    gotoForm.className = 'goto-form';
    gotoInputContainer.className = '-input-container';
    gotoInput.className = '-input';
    gotoSubmitContainer.className = 'modal-submit';
    gotoSubmitButton.className = '-button';
    gotoCancelButton.className = '-button';

    gotoModalLabel.innerHTML = `<strong>Go to level (1—${levels.length}):</strong>`;
    gotoInput.type = 'number';
    gotoSubmitButton.disabled = true;
    gotoSubmitButton.innerText = 'OK';
    gotoCancelButton.innerText = 'Cancel';

    this.modal.appendChild(gotoModalLabel);
    this.modal.appendChild(gotoForm);
    gotoForm.appendChild(gotoInputContainer);
    gotoInputContainer.appendChild(gotoInput);
    gotoForm.appendChild(gotoSubmitContainer);
    gotoSubmitContainer.appendChild(gotoSubmitButton);
    gotoSubmitContainer.appendChild(gotoCancelButton);
    gotoInput.focus();

    const tryToGoTo = (): void => {
      const inputValue: string = gotoInput.value;

      if (getLevelIndexById(parseInt(inputValue, 10)) === -1) {
        gotoInput.value = '';
        gotoSubmitButton.disabled = true;
        gotoInput.focus();

        return;
      }

      this.game.destroy();

      new Game(parseInt(inputValue, 10));

      this.close();
    };

    gotoSubmitButton.addEventListener('click', tryToGoTo);
    gotoCancelButton.addEventListener('click', () => this.close());

    gotoInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        tryToGoTo();
      }
    });

    gotoInput.addEventListener('keyup', () => {
      gotoSubmitButton.disabled = !gotoInput.value;
    });
  }
}

export { Goto };
