import { FunctionComponent } from "react";
import style from "./inputComponent.module.scss";

interface InputComponentProps {
  type: string;
  label: string;
}

const InputComponent: FunctionComponent<InputComponentProps> = ({
  type,
  label,
}) => {
  return (
    <>
      <label htmlFor={label} className={style.name}>
        {label}
      </label>
      <input type={type} className={style.text} />
    </>
  );
};

export default InputComponent;
