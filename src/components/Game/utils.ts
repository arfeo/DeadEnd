import { levels } from '../../constants/levels';
import { Directions } from '../../constants/game';

import { Level } from '../../types/game';

function invertDirection(direction: Directions): Directions {
  switch (direction) {
    case Directions.Up: return Directions.Down;
    case Directions.Right: return Directions.Left;
    case Directions.Down: return Directions.Up;
    case Directions.Left: return Directions.Right;
    default: break;
  }
}

function getLevelIndexById(levelId: number): number {
  return levels.findIndex((item: Level) => {
    return item.id === levelId;
  });
}

export { invertDirection, getLevelIndexById };
