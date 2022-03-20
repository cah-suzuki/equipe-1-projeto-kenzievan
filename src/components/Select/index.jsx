import { customStyles, Container } from "./styles";
import Select from "react-select";

const SelectInput = ({ label, error, ...rest }) => {
  return (
    <Container>
      {/* <label>{label}</label> */}
      <Select
        styles={customStyles}
        placeholder="Selecione"
        menuPlacement="auto"
        {...rest}
      />
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default SelectInput;
