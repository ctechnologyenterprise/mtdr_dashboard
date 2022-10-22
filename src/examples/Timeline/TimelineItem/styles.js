function timelineItem(theme, ownerState) {
  const { borders } = theme;
  const { lastItem, isDark } = ownerState;

  const { borderRadius } = borders;
  const borderColor = isDark ? "white" : "#2D2E5F";

  return {
    "&:after": {
      content: "''",
      position: "absolute",
      top: "20%",
      left: "14px",
      height: lastItem ? "70%" : "80%",
      width: "2px",
      background: `${borderColor}`,
      borderRadius: borderRadius.md,
    },
  };
}

function timelineItemIcon(theme, ownerState) {
  const { palette, typography, functions } = theme;
  const { color } = ownerState;

  const { transparent } = palette;
  const { size, fontWeightMedium } = typography;

  return {
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translate(-52%, -60%)",
    fontSize: size.xl,
    fontWeight: fontWeightMedium,
    zIndex: 1,
    background: palette[color].main,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
  };
}

export { timelineItem, timelineItemIcon };
