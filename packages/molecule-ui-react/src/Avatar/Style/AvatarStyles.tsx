import { createUseStyles } from "react-jss";
import { Props } from "../Avatar";

const sizeMap = {
  tiny: "50px",
  small: "75px",
  normal: "100px",
  large: "125px",
};

const dotSizeMap = {
  tiny: "5px",
  small: "10px",
  normal: "15px",
  large: "20px",
};

const styles = createUseStyles({
  "avatar-base": {
    width: (props: Props) => sizeMap[props.size],
    height: (props: Props) => sizeMap[props.size],
    position: "relative",
  },
  "avatar-image": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  "status-dot": {
    position: "absolute",
    width: (props: Props) => dotSizeMap[props.size],
    height: (props: Props) => dotSizeMap[props.size],
    right: 0,
    bottom: "13%",
    border: "1px solid #fff",
  },
});

export default styles;
