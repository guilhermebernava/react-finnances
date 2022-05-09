import { FunctionComponent, ReactNode } from "react";
import style from "./backgroundLogin.module.scss";
import Circle from "../circle";

interface BackgroundLoginProps {
  children?: ReactNode;
}

const BackgroundLogin: FunctionComponent<BackgroundLoginProps> = () => {
  return (
    <div className={style.main}>
      <Circle width="500px" height="500px" margin="0 0 0 -300px" />
      <Circle width="400px" height="400px" margin="-200px 0px 0 700px" />
      <Circle width="500px" height="500px" margin="600px 0px 0 500px" />
      <Circle width="400px" height="400px" margin="200px 0px 0 1500px" />
    </div>
  );
};

export default BackgroundLogin;
