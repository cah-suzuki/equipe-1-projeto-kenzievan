import { useState } from "react";
import Container from "./styles";

const Input = ({
  label,
  register,
  name,
  error,
  classname,
  icon,

  ...rest
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  return (
    <Container
      modal
      className={`${classname ? classname : ""} ${error ? "input--error" : ""}`}
      isInputEmpty={isInputEmpty}
      error={!!error}
    >
      <input
        {...register(`${name}`, {
          onChange: (e) => setIsInputEmpty(!e.target.value),
        })}
        {...rest}
      ></input>

      <label>{label}</label>

      {error && <span>{error.message}</span>}
    </Container>
    // <Container>
    //   <label>{label}</label>
    //   <input {...rest} {...register(name)} />
    //   {!!error && <span>{error.message}</span>}
    // </Container>
  );
};

export default Input;
