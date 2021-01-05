export interface DrawOptions {
  fillColor?: string | CanvasGradient;
  edgingWidth?: number;
  edgingColor?: string;
}

export type DrawOptionsExtended = DrawOptions & {
  startAngle?: number;
  endAngle?: number;
}

function drawCircle(
  ctx: CanvasRenderingContext2D,
  dotX: number,
  dotY: number,
  radius: number,
  options: Omit<DrawOptionsExtended, 'startAngle' | 'endAngle'> = {},
): void {
  drawArc(
    ctx,
    dotX,
    dotY,
    radius,
    {
      ...options,
      startAngle: 0,
      endAngle: Math.PI * 2,
    },
  );
}

function drawArc(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  options: DrawOptionsExtended = {},
): void {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, options.startAngle, options.endAngle);

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }
}

function drawLineToAngle(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  length: number,
  angle: number,
  options: Omit<DrawOptions, 'fillColor'> = {},
): number[][] {
  const a = angle * Math.PI / 180;
  const x2 = x1 + length * Math.cos(a);
  const y2 = y1 + length * Math.sin(a);

  ctx.strokeStyle = options.edgingColor;
  ctx.lineWidth = options.edgingWidth;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  return [
    [x1, y1],
    [x2, y2],
  ];
}

function drawRectangle(
  ctx: CanvasRenderingContext2D,
  left: number,
  top: number,
  width: number,
  height: number,
  options: DrawOptions = {},
): void {
  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fillRect(left, top, width, height);
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.strokeRect(left, top, width, height);
  }
}

function drawTriangle(
  ctx: CanvasRenderingContext2D,
  c1: number[],
  c2: number[],
  c3: number[],
  options: DrawOptions = {},
): void {
  ctx.beginPath();
  ctx.moveTo(c1[0], c1[1]);
  ctx.lineTo(c2[0], c2[1]);
  ctx.lineTo(c3[0], c3[1]);
  ctx.closePath();

  if (options.fillColor) {
    ctx.fillStyle = options.fillColor;

    ctx.fill();
  }

  if (options.edgingWidth) {
    ctx.lineWidth = options.edgingWidth;
    ctx.strokeStyle = options.edgingColor || 'rgba(0, 0, 0, 0)';

    ctx.stroke();
  }
}

export {
  drawCircle,
  drawArc,
  drawLineToAngle,
  drawRectangle,
  drawTriangle,
};
