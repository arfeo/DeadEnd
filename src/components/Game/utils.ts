import { levels } from '../../constants/levels';

import { findIndex } from 'lodash';

export const invertDirection = (direction: string): string => {
  switch (direction) {
    case 'up': return 'down';
    case 'right': return 'left';
    case 'down': return 'up';
    case 'left': return 'right';
    default: return null as string;
  }
};

export const levelIndexById = (levelId: number): number => {
  return findIndex(levels, { id: levelId });
};
