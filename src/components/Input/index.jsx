import { Container } from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest} {...register(name)} />
      {!!error && <span>{error.message}</span>}
    </Container>
  );
};

export default Input;
