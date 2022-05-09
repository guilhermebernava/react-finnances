import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface CircleComponentProps {
  width: string;
  height: string;
  margin: string;
}

const CircleComponent: FunctionComponent<CircleComponentProps> = (props) => {
  return (
    <Box
      sx={{
        background: "#232323",
        borderRadius: "50%",
        position: "absolute",
        width: props.height,
        height: props.width,
        margin: props.margin,
      }}
    />
  );
};

export default CircleComponent;
