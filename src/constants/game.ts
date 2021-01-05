export const CELL_SIZE_VMIN = 4;

export enum GridDimensions {
  Width = 32,
  Height = 20,
}

export enum MapObjects {
  Nothing = 0,
  Ball,
  Exit,
  Wall,
  StoneRegular,
  StoneUp,
  StoneRight,
  StoneDown,
  StoneLeft,
}

export enum Directions {
  Up = 'up',
  Right = 'right',
  Down = 'down',
  Left = 'left',
}
