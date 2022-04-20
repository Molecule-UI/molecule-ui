import { createUseStyles } from "react-jss";
import { Props } from "../Wrapper";

const paddingMap = {
  sm: "12px",
  md: "24px",
  lg: "36px",
  xl: "48px",
};

const flexOptionMap = {
  top: "start",
  left: "start",
  middle: "center",
  center: "center",
  down: "end",
  right: "end",
};

const getAlignItem = (props: Props) => {
  if (props.flexDirection === "row") {
    return flexOptionMap[props.verticalAlign];
  }

  return flexOptionMap[props.horizontalAlign];
};
const getJustifyContent = (props: Props) => {
  if (props.flexDirection === "row") {
    return flexOptionMap[props.horizontalAlign];
  }

  return flexOptionMap[props.verticalAlign];
};

const getHorizontalAlign = (props: Props) => {
  return flexOptionMap[props.horizontalAlign];
};

const styles = createUseStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      fontSize: "62.5%",
    },
  },
  "wrapper-root": {
    padding: (props: Props) => paddingMap[props.padding],
    display: (props: Props) => props.display,
    gridTemplateRows: (props: Props) => `repeat(${props.rows}, 1fr)`,
    gridTemplateColumns: (props: Props) => `repeat(${props.cols}, 1fr)`,
    flexDirection: (props: Props) => props.flexDirection,
    justifyContent: (props: Props) => getJustifyContent(props),
    alignItems: (props: Props) => getAlignItem(props),
    gap: (props: Props) => `${props.gap}px`,
    justifyItems: (props: Props) => getHorizontalAlign(props),
  },
});

export default styles;
