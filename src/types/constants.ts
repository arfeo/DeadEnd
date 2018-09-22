import { Game } from '../components/Game';

export interface IGlobals {
  pageInstance: Game;
  eventListeners: {
    onKeyDown: EventListener;
    onUndoButtonClick: EventListener;
  };
  cellSize: number;
}

export interface ILevels {
  id: number;
  boardMap: number[][];
}
