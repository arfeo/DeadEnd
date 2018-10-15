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
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
  },
  {
    id: 5,
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
];
