export const CELL_SIZE_VMIN = 4;

export enum GameColors {
  BallGradientInner = 'rgb(0, 191, 255)',
  BallGradientOuter = 'rgb(65, 105, 225)',
  ExitGradientInner = 'rgb(255, 0, 0)',
  ExitGradientOuter = 'rgb(255, 215, 0)',
  Wall = 'rgb(255, 0, 0)',
  Stone = 'rgb(128, 128, 128)',
  StoneLabel = 'rgb(0, 0, 0)',
  Background = 'rgb(0, 0, 0)'
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
