function calculateVMin(): number {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
}

function setCellSize(vmin: number): number {
  return Math.round(calculateVMin() * vmin  / 10) * 10;
}

export { setCellSize };
