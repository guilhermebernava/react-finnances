import { FunctionComponent, ButtonHTMLAttributes } from "react";
import style from "./button.module.scss";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent: FunctionComponent<buttonProps> = (
  props: buttonProps
) => {
  return <button className={style.button} {...props} />;
};

export default ButtonComponent;
