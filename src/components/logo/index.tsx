import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface LogoComponentProps {}

const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "#FA8C1D",
          fontFamily: "SF Pro Display",
          fontWeight: "700",
        }}
      >
        MY
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: "#FA8C1D",
          fontFamily: "SF Pro Display",
          fontWeight: "700",
        }}
      >
        FINNANCES
      </Typography>
    </Box>
  );
};

export default LogoComponent;
