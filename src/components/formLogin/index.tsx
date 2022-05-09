import { FunctionComponent } from "react";
import ButtonComponent from "../button";
import InputComponent from "../inputComponent";
import LinkComponent from "../link";
import style from "./formLogin.module.scss";

interface FormLoginProps {}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
  return (
    <form action="" className={style.form}>
      <InputComponent label="EMAIL" type="text" />
      <InputComponent label="PASSWORD" type="password" />
      <LinkComponent
        margin="-10px 0 30px 220px"
        href="www.google.com"
        label="Forgot Password ?"
      />
      <ButtonComponent>Sign In</ButtonComponent>
    </form>
  );
};

export default FormLogin;
