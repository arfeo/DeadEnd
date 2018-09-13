import { globals } from '../constants/globals';

export const calculateVMin = (): number => {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
};

export const setCellSize = (): number => {
  return globals.cellSize > 0 ? globals.cellSize : Math.round(calculateVMin() * 4  / 10) * 10;
};

export const invertDirection = (direction: string): string => {
  switch (direction) {
    case 'up': return 'down';
    case 'right': return 'left';
    case 'down': return 'up';
    case 'left': return 'right';
    default: return null as string;
  }
};
