/**
 * Function calculates the analogue of CSS vmin in pixels
 */
function calculateVMin(): number {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
}

/**
 * Function returns the cell size (atomic canvas measure)
 * depending on the screen size and the given vmin value
 */
function setCellSize(vmin: number): number {
  return Math.round(calculateVMin() * vmin  / 10) * 10;
}

export { setCellSize };
