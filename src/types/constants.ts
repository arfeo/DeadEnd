import { Game } from '../components/Game';

export interface IGlobals {
  pageInstance: Game;
  eventListeners: {
    onKeyDown: EventListener;
    onGotoButtonClick: EventListener;
    onUndoButtonClick: EventListener;
    onHelpButtonClick: EventListener;
  };
  cellSize: number;
}

export interface ILevel {
  id: number;
  boardMap: number[][];
}
