import { Game } from '../components/Game';

export interface IGlobals {
  pageInstance: Game;
  eventListeners: {
    keyDown: EventListener;
  };
  cellSize: number;
}

export interface ILevels {
  id: number;
  boardMap: number[][];
}

export interface IUndoMap {
  stones: number[][];
  ball: number[];
}
