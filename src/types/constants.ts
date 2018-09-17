import { Game } from '../components/Game';

export interface IGlobals {
  pageInstance: Game;
  cellSize: number;
}

export interface ILevels {
  id: number;
  boardMap: number[][];
}
