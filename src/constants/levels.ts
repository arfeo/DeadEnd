/**
 * Legend:
 *
 * 1 - ball
 * 2 - exit
 * 3 - wall
 * 4 - stone (regular)
 */

import { ILevels } from '../types/constants';

export const levels: ILevels[] = [
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
];
