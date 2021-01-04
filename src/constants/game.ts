export enum GameColors {
  BallGradientInner = 'deepskyblue',
  BallGradientOuter = 'royalblue',
  ExitGradientInner = 'red',
  ExitGradientOuter = 'gold',
  Wall = 'red',
  Stone = 'grey',
  StoneLabel = 'black',
}

export enum StoneLabels {
  Up = '↑',
  Right = '→',
  Down = '↓',
  Left = '←',
}

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

export const CELL_SIZE_VMIN = 4;

export const STONE_LABEL_FONT = '2vmin Helvetica, Arial';
