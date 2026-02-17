function makeClamp(minFontPx, maxFontPx, minViewportRem, maxViewportRem) {
  const minFont = minFontPx / 10;
  const maxFont = maxFontPx / 10;
  const range = maxViewportRem - minViewportRem;
  const slope = ((maxFont - minFont) / range) * 100;
  const intercept = minFont - (slope / 100) * minViewportRem;
  return `clamp(${minFont}rem, calc(${intercept.toFixed(2)}rem + ${slope.toFixed(2)}vw), ${maxFont}rem)`;
}

makeClamp(38, 62, 37.5, 76.8);
