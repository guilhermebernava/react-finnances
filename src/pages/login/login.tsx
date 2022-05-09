import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import BackgroundLogin from "../../components/backgroundLogin";
import FormLogin from "../../components/formLogin";
import LogoComponent from "../../components/logo";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <Box>
      <BackgroundLogin />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "200px 500px",
        }}
      >
        <LogoComponent />
        <FormLogin />
      </Box>
    </Box>
  );
};

export default Login;
