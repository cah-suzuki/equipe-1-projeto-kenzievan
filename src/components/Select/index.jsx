import { customStyles, Container } from "./styles";
import Select from "react-select";

const SelectInput = ({ label, error, ...rest }) => {
  return (
    <Container>
      <Select
        styles={customStyles}
        placeholder="Selecione o tipo de usuário"
        menuPlacement="auto"
        error={!!error}
        {...rest}
      />
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default SelectInput;
