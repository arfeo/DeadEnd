import { globals } from '../constants/globals';

export const calculateVMin = (): number => {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
};

export const setCellSize = (): number => {
  return globals.cellSize > 0 ? globals.cellSize : Math.round(calculateVMin() * 4  / 10) * 10;
}
