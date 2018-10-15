import { Modal } from '../common/Modal';
import { Game } from '../Game';

class Help extends Modal {
  constructor(game: Game) {
    super(game, 'large');
  }

  render() {
    const textContainer: HTMLElement = document.createElement('div');
    const submitContainer: HTMLElement = document.createElement('div');
    const closeButton: HTMLButtonElement = document.createElement('button');

    textContainer.innerHTML = (`
      <strong>The game</strong>
      <p>DeadEnd is a strategy game. It is your goal to find a path out of a
      dungeon by pushing massive blocks of stone out of your way. This is a
      very tricky task because stones are so heavy that</p>
      <ol>
      <li>you can move them only one by one,</li>
      <li>you need space to step back and take a run, and</li>
      <li>you can only push, not pull.</li>
      </ol>
      <p>You have to develop a strategy and move pieces in the correct order,
      otherwise stones will block the way to exit. A piece pushed to the wrong
      place could be an obstacle for removing another block from your path.
      At higher levels there will be blocks which can only be pushed into one direction.</p>
      <strong>How to play</strong>
      <p>Keyboard arrow keys control a blue ball which you have to guide to the exit in order
      to reach the next level. If you move the ball to a block, the ball will try to push it.</p>
      <p>If you get stuck, use the <em>Undo</em> button. You can go to another level at any time
      using the <em>Go to...</em> button, but it is highly recommended to solve the levels one after another.</p>
      <strong>Known bug</strong>
      <p>The game will not launch on a Mac SE (a Macintosh model which was introduced in 1987, I think...).</p>
    `);
    submitContainer.className = 'modal-submit';
    closeButton.className = '-button';
    closeButton.innerText = 'Close';

    this.modal.appendChild(textContainer);
    this.modal.appendChild(submitContainer);
    submitContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => this.close());
  }
}

export { Help };
