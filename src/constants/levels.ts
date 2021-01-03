/**
 * Legend:
 *
 * 1 - ball
 * 2 - exit
 * 3 - wall
 * 4 - stone (regular)
 * 5 - stone (up arrow)
 * 6 - stone (right arrow)
 * 7 - stone (down arrow)
 * 8 - stone (left arrow)
 */

import { ILevel } from '../types/game';

export const levels: ILevel[] = [
  {
    id: 1,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,0,3,0,3,0,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,3,3,3,2,3,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,3,3,0,4,0,4,0,0,0,3,3,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,0,0,0,0,4,4,4,0,4,0,0,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,4,0,4,0,4,0,4,0,0,0,4,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,4,0,0,4,0,4,4,4,4,4,0,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,4,4,4,0,4,0,0,1,4,0,4,4,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 2,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,4,0,4,0,4,0,4,0,4,0,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,1,0,4,0,4,0,4,0,4,0,4,0,4,0,4,2,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,4,0,4,0,4,0,4,0,4,0,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,4,0,4,0,4,0,4,0,4,0,4,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 3,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,0,0,4,0,4,0,2,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,4,4,4,4,0,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,1,0,4,0,4,0,0,0,4,0,4,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,1,0,4,0,4,0,4,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,0,0,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,4,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 4,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,4,0,0,0,0,0,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,4,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,4,0,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,4,4,0,0,4,4,4,4,4,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,1,0,4,0,4,0,4,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,0,4,0,0,4,0,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,0,4,0,4,0,4,4,4,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,4,0,0,4,4,4,2,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,4,0,0,4,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,0,0,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 5,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,4,4,0,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,3,3,0,3,0,0,4,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,4,4,0,0,4,4,0,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,4,0,4,0,4,0,0,0,4,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,3,3,0,3,0,4,4,0,4,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,1,3,3,0,4,0,0,2,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,4,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 6,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,4,4,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,0,4,4,4,4,4,4,4,0,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 7,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,4,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,4,0,4,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,0,4,4,0,0,4,0,0,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,0,0,0,0,0,4,0,4,4,0,4,4,0,0,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,0,0,4,4,0,0,4,0,4,4,0,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,0,0,4,0,4,4,0,0,4,0,4,4,0,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,4,0,0,4,0,0,4,4,0,4,0,4,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,0,4,4,0,4,4,0,0,4,0,4,0,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,0,4,0,0,4,0,4,4,0,4,0,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,4,0,0,4,0,0,4,0,4,4,0,0,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,0,0,4,4,0,4,4,4,0,4,4,0,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,1,0,0,4,0,0,4,0,0,4,4,0,4,4,0,2,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 8,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,4,0,4,0,4,0,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,4,0,4,0,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,4,0,4,0,4,0,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,4,4,4,0,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,1,4,0,4,4,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,4,4,4,2,4,4,0,4,0,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,4,4,0,4,0,4,4,0,4,0,4,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,0,0,4,0,4,0,4,4,0,4,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,0,4,0,4,0,4,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,0,4,0,4,0,0,3,0,0,4,0,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,0,3,4,0,0,4,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 9,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,0,3,3,3,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,0,1,0,0,3,0,0,0,3,0,0,3,0,3,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,3,3,0,4,0,3,3,4,3,0,3,4,4,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,0,4,0,4,4,4,0,0,0,0,4,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,3,0,0,4,0,4,4,0,3,4,3,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,0,0,0,0,3,0,0,0,4,4,0,0,4,0,0,4,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,0,3,3,3,0,0,3,3,3,3,0,0,0,0,2,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 10,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,3,1,0,4,0,4,0,4,0,4,0,0,4,0,4,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,0,0,4,0,4,0,0,4,0,4,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,4,0,4,0,0,4,0,0,0,4,4,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,4,0,4,0,0,4,0,4,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,4,0,0,4,0,4,0,4,0,4,0,4,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,4,0,4,4,0,4,0,0,0,4,0,4,3,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,0,0,4,0,0,4,0,0,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,0,0,4,0,4,0,4,0,0,4,0,4,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,4,0,4,0,0,4,0,4,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,0,0,4,0,4,0,0,0,4,0,0,4,0,0,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,2,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 11,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,4,1,4,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,4,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,5,0,4,6,0,5,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,5,0,4,5,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,7,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,4,0,5,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,5,6,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,6,0,0,6,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,7,7,6,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,0,8,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 12,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0],
      [0,0,0,0,3,4,0,4,0,0,0,0,0,4,0,0,0,0,0,4,0,4,0,4,0,4,0,3,0,0,0,0],
      [0,0,0,0,3,0,0,0,4,0,0,0,3,3,3,0,0,0,0,0,4,0,0,0,4,0,0,3,0,0,0,0],
      [0,0,0,0,3,0,0,4,0,3,3,3,3,0,3,3,3,3,3,4,4,4,4,4,4,4,4,3,0,0,0,0],
      [0,0,0,0,3,4,4,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0],
      [0,0,0,0,3,0,0,4,3,3,0,0,0,3,0,0,0,0,3,3,4,4,4,4,4,4,3,3,0,0,0,0],
      [0,0,0,0,3,4,0,4,3,0,0,3,3,3,3,3,0,0,0,3,0,0,0,0,0,4,3,0,0,0,0,0],
      [0,0,0,0,3,0,0,0,3,0,0,3,0,0,0,3,0,0,0,3,0,4,0,4,4,0,3,0,0,0,0,0],
      [0,0,0,0,3,3,0,3,3,0,0,3,0,0,0,3,0,0,0,3,3,0,0,4,0,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,0,3,0,0,3,3,4,0,4,3,3,0,0,0,3,0,4,0,0,3,0,0,0,0,0,0],
      [0,0,0,3,3,3,4,3,3,3,3,0,0,4,0,0,3,0,0,0,3,4,0,0,4,3,0,0,0,0,0,0],
      [0,0,0,3,0,0,0,0,0,0,4,0,4,0,4,0,4,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,3,3,3,4,3,3,3,3,4,0,1,0,4,3,3,3,3,3,3,3,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,3,0,0,3,0,0,3,0,4,4,4,0,4,0,4,4,0,4,0,0,3,3,3,0,0,0,0,0],
      [0,0,0,0,3,2,0,3,0,0,3,4,0,4,0,4,0,0,0,0,0,0,0,4,0,0,3,0,0,0,0,0],
      [0,0,0,0,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 13,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,4,0,0,4,4,0,0,0,4,4,0,0,4,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,4,0,4,0,4,0,4,0,4,0,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,0,0,4,4,0,0,4,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,4,0,4,0,4,0,4,0,4,0,4,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,1,0,4,4,0,0,0,4,4,0,2,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,0,0,4,4,0,4,0,4,0,4,4,0,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,4,0,0,4,0,0,4,0,4,0,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,4,0,0,4,0,4,0,4,0,4,0,0,4,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 14,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0],
      [0,0,0,3,3,0,3,3,0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,3,3,0,3,3,0,0,0,0],
      [0,0,3,3,0,0,0,0,3,0,0,0,3,0,0,0,6,0,3,0,0,0,3,0,4,0,0,3,3,0,0,0],
      [0,0,3,4,4,0,4,0,0,3,0,3,0,0,4,0,6,0,4,3,0,3,0,0,4,0,0,4,3,0,0,0],
      [0,0,3,4,0,0,7,0,4,0,3,0,0,4,0,7,5,0,4,0,3,0,0,4,4,0,4,4,3,0,0,0],
      [0,0,3,4,0,0,4,0,4,0,0,0,0,6,0,0,0,5,0,4,0,0,4,0,0,4,0,4,3,0,0,0],
      [0,0,3,3,4,0,4,0,0,0,0,7,0,4,0,0,8,0,0,5,0,0,8,0,4,0,4,3,3,0,0,0],
      [0,0,0,3,3,4,0,7,4,7,4,0,5,0,0,4,0,4,0,0,7,0,7,4,0,4,3,3,0,0,0,0],
      [0,0,0,0,3,3,4,1,6,0,8,0,0,7,0,4,0,6,4,8,0,8,0,2,4,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,4,0,4,5,0,4,0,0,4,0,0,0,8,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,4,0,4,0,3,3,3,3,3,0,4,0,4,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,0,3,0,3,3,0,0,0,3,3,0,3,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 15,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,1,4,0,4,0,4,7,0,2,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,8,0,0,4,4,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,0,4,4,4,4,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,0,0,0,4,0,0,4,4,4,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,3,3,3,4,4,0,4,4,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,4,0,4,7,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,4,4,5,0,4,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,3,3,0,0,0,5,4,4,0,4,0,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 16,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,0,4,0,4,0,1,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,0,0,4,0,4,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,4,0,0,4,4,4,4,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,4,0,4,0,0,0,4,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,0,4,0,0,0,0,0,3,0,0,0,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,4,0,0,4,0,4,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,4,4,4,4,4,4,4,4,4,5,0,4,0,4,0,2,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,6,0,4,0,0,4,0,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,4,4,4,4,0,5,0,4,0,0,0,7,7,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,4,0,0,0,0,0,5,4,4,4,4,0,4,0,0,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,4,4,0,5,0,4,0,0,0,4,0,0,4,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,0,0,5,0,0,4,7,4,4,0,4,4,0,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,4,0,7,8,0,0,4,0,4,0,4,0,0,0,4,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,0,0,7,0,8,4,4,5,0,0,4,4,7,7,4,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,4,7,0,0,6,0,0,4,0,4,0,4,0,0,0,0,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,7,0,4,4,0,0,0,0,4,0,0,4,0,0,4,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 17,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,4,0,4,0,0,4,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,4,4,4,4,4,4,0,4,0,0,0,5,0,2,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,0,8,0,0,0,4,0,4,0,0,4,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,4,4,4,4,0,4,4,0,0,3,3,3,3,3,0,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,4,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,4,4,4,4,7,4,4,4,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,8,0,0,0,0,4,0,0,4,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,6,0,8,0,0,6,0,4,0,4,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,4,4,0,4,0,4,4,0,0,4,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,4,0,4,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,4,0,4,0,4,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,4,4,0,4,4,4,0,4,4,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,0,0,4,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,4,4,4,4,4,4,4,4,4,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,0,0,4,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,0,4,0,1,0,4,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 18,
    boardMap: [
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,4,0,4,0,4,0,4,0,0,4,0,0,4,4,4,0,3,3,0,0,0,0,0],
      [0,0,0,0,3,3,0,0,4,4,0,4,0,4,0,4,0,4,0,4,4,4,0,4,0,0,3,3,0,0,0,0],
      [0,0,0,3,3,0,4,0,4,0,4,0,0,3,3,3,3,3,3,0,4,0,0,0,4,0,1,3,3,0,0,0],
      [0,0,3,3,0,0,0,0,0,6,0,0,3,3,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
      [0,0,3,3,4,4,4,4,4,0,4,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,3,3,0,0,0,0,0,4,0,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
      [0,0,3,3,0,4,4,0,4,4,0,3,3,0,0,3,3,0,0,0,6,0,0,0,0,0,0,0,3,3,0,0],
      [0,0,3,3,0,0,0,6,0,0,0,3,3,0,0,3,3,2,0,0,0,8,0,4,4,0,4,0,3,3,0,0],
      [0,0,3,3,4,4,4,4,4,0,0,3,3,0,0,3,3,3,3,3,4,0,6,0,0,4,4,0,3,3,0,0],
      [0,0,3,3,0,4,0,0,4,4,4,3,3,0,0,0,0,0,0,3,3,4,0,4,0,4,0,0,3,3,0,0],
      [0,0,3,3,4,0,4,4,4,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0,4,4,0,0,3,3,0,0],
      [0,0,3,3,0,0,0,4,0,0,4,0,3,3,0,0,0,0,3,3,0,4,0,0,4,0,0,0,3,3,0,0],
      [0,0,0,3,3,0,4,0,0,5,4,4,4,3,3,3,3,3,3,0,0,4,0,0,4,4,0,3,3,0,0,0],
      [0,0,0,0,3,3,4,4,0,0,5,0,4,0,0,0,0,0,0,4,4,0,4,4,4,0,3,3,0,0,0,0],
      [0,0,0,0,0,3,3,0,4,0,0,0,8,0,4,4,4,4,4,0,4,4,0,0,0,3,3,0,0,0,0,0],
      [0,0,0,0,0,0,3,3,0,0,4,0,4,0,0,4,0,0,0,0,0,0,4,0,3,3,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 19,
    boardMap: [
      [0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,0,4,0,4,0,4,3,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,0,4,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,4,0,4,4,0,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,0,0,0,4,6,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,3,3,3,3,3,3,4,4,4,4,0,4,4,4,4,4,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,4,0,0,4,0,0,3,3,0,0,0,0,4,0,0,0,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,0,4,0,0,4,3,0,0,3,4,0,4,0,4,0,0,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,4,4,4,0,4,0,0,3,0,0,3,0,4,0,8,4,4,4,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,0,0,0,4,3,3,0,0,3,3,0,0,0,0,0,4,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,0,4,0,4,0,3,3,0,0,3,3,0,4,4,0,4,0,3,3,0,0,0,0,0],
      [0,0,0,0,0,3,3,0,4,4,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,3,3,0,0,0,0,0],
      [0,0,0,3,3,3,3,4,0,4,4,4,0,4,0,0,0,0,4,0,4,4,4,4,4,3,3,3,3,0,0,0],
      [0,0,0,3,0,0,0,0,4,4,0,0,4,0,0,4,0,4,0,0,0,0,0,0,4,0,0,0,3,0,0,0],
      [3,3,3,3,4,4,0,4,0,4,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,0,4,4,3,3,3,3],
      [3,3,3,0,0,0,4,0,4,0,3,3,0,0,0,0,0,0,0,0,3,3,0,4,0,4,0,0,0,3,3,3],
      [3,3,3,4,0,4,4,0,0,4,3,3,0,0,0,0,0,0,0,0,3,3,4,0,0,4,4,0,4,3,3,3],
      [3,3,3,0,4,0,1,0,4,0,3,3,0,0,0,0,0,0,0,0,3,3,0,4,0,2,0,4,0,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
  {
    id: 20,
    boardMap: [
      [0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0],
      [0,3,0,0,4,0,0,4,4,4,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,3,0],
      [0,3,0,0,4,0,0,0,0,0,0,3,0,0,3,0,0,0,0,3,4,4,4,4,4,4,4,4,4,4,3,0],
      [0,3,3,4,4,4,4,4,4,4,4,0,3,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0],
      [0,3,3,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,3,0,3,4,4,4,4,4,4,4,3,3,0],
      [0,3,3,0,3,4,4,4,4,4,4,4,4,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,0,3,3,0],
      [0,3,3,0,3,0,0,3,0,0,0,4,0,4,0,3,0,0,3,3,0,3,4,4,4,4,4,3,0,3,3,0],
      [0,3,3,0,3,0,0,3,0,0,0,0,4,0,4,0,3,0,0,3,0,3,0,0,0,0,0,3,0,3,3,0],
      [0,3,3,0,3,0,3,0,0,0,0,4,0,4,0,4,0,3,0,0,0,3,4,4,4,3,0,3,0,3,3,0],
      [0,3,3,0,3,0,3,0,0,0,3,3,3,3,0,0,4,0,3,3,3,3,0,0,0,3,0,3,0,3,3,0],
      [0,3,3,0,3,0,3,4,4,4,3,0,0,0,3,0,4,4,0,0,0,0,0,0,0,3,0,3,0,3,3,0],
      [0,3,3,0,3,0,3,0,0,0,3,0,3,0,0,3,0,0,4,0,0,0,0,0,0,3,0,3,0,3,3,0],
      [0,3,3,0,3,0,4,4,4,4,3,0,3,3,0,0,3,0,0,4,4,0,0,4,4,0,0,3,0,3,3,0],
      [0,3,3,0,3,0,0,0,0,0,3,0,3,0,3,0,0,3,0,4,0,0,4,0,0,0,0,3,0,3,3,0],
      [0,3,3,0,4,4,4,4,4,4,3,0,3,0,0,3,0,0,3,0,4,4,0,4,4,0,4,0,0,3,3,0],
      [0,3,0,0,4,0,4,0,0,4,0,0,3,0,0,0,3,0,0,3,0,4,4,4,0,4,0,4,0,3,3,0],
      [0,3,0,0,4,0,4,0,0,4,0,0,3,0,0,0,0,3,0,0,3,0,4,0,4,0,4,0,4,0,3,0],
      [0,3,1,0,4,0,4,0,0,4,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,4,0,0,0,0,3,0],
      [0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
  },
];
