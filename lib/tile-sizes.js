// Derive a correct `sizes` value from a tile's area string so Next.js serves
// the right resolution. Area format: "rowStart / colStart / rowEnd / colEnd".
//
// With object-cover, whichever dimension constrains the scale determines the
// effective pixel width needed. For portrait photos (assumed 2:3 ratio), a tall
// narrow tile is height-constrained: the image must fill the height, so the
// required width = height × (2/3) — often larger than the container's own width.
export function tileSizes(area, rowHeightPx = 170) {
  const [r0, c0, r1, c1] = area.split("/").map((s) => parseInt(s.trim(), 10));
  const colFraction = (c1 - c0) / 3;
  const heightPx = (r1 - r0) * rowHeightPx;

  const imgRatio = 2 / 3; // assumed portrait aspect ratio (w:h)
  const viewportPx = 1440; // reference viewport for the calculation
  const containerWidthPx = colFraction * viewportPx;

  const effectiveWidthPx =
    containerWidthPx / heightPx < imgRatio
      ? heightPx * imgRatio   // height-constrained: need width = height × ratio
      : containerWidthPx;     // width-constrained: need width = container width

  const vw = Math.min(100, Math.ceil((effectiveWidthPx / viewportPx) * 100));
  return `(max-width: 565px) 100vw, ${vw}vw`;
}
