import { Container } from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest} />
    </Container>
  );
};

export default Input;
