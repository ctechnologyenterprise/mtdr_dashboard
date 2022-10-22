import colors from "assets/theme/base/colors";

function defaultItemIconBox(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { pxToRem, rgba } = functions;
  const { info } = colors;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    width: pxToRem(48),
    height: pxToRem(48),
    borderRadius: borderRadius.lg,
    background: info.main
  };
}


export { defaultItemIconBox, };
