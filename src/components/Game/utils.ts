import { levels } from '../../constants/levels';

import { findIndex } from 'lodash';

/**
 * Invert the ball movement direction
 *
 * @param direction
 */
function invertDirection(direction: string): string {
  switch (direction) {
    case 'up': return 'down';
    case 'right': return 'left';
    case 'down': return 'up';
    case 'left': return 'right';
    default: return null as string;
  }
}

/**
 * Get level object index by id key
 *
 * @param levelId
 */
function levelIndexById(levelId: number): number {
  return findIndex(levels, { id: levelId });
}

export { invertDirection, levelIndexById };
