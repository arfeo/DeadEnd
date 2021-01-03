import { levels } from '../../constants/levels';

import { ILevel } from '../../types/game';

function invertDirection(direction: string): string {
  switch (direction) {
    case 'up': return 'down';
    case 'right': return 'left';
    case 'down': return 'up';
    case 'left': return 'right';
    default: return null as string;
  }
}

function getLevelIndexById(levelId: number): number {
  return levels.findIndex((item: ILevel) => {
    return item.id === levelId;
  });
}

export { invertDirection, getLevelIndexById };
