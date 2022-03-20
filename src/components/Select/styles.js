import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 10px;

  /* label {
    font-size: 16px;
    color: #333;
    margin-bottom: 12px;
    display: block;
  } */

  span {
    font-size: 12px;
    color: red;
    position: absolute;
    left: 0;
    top: 90%;
  }
`;

export const customStyles = {
  // INPUT BOX
  control: (base) => ({
    ...base,
    minHeight: "48px",
    background: "#fff",
    color: "#000",
    border: "2px solid #aaa",
    cursor: "pointer",
    boxShadow: "none",
    fontSize: "16px",
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  // OPTION ESCOLHIDA
  singleValue: (base) => ({
    ...base,
    color: "#000",
  }),
  // MENU BOX
  menu: (base) => ({
    ...base,
    background: "#fff",
  }),
  // OPTION IN MENU BOX
  option: (base, state) => ({
    ...base,
    color: "#000",
    cursor: "pointer",
    transition: "0.2s",
    backgroundColor: state.isSelected ? "#e4e4e4" : "#fff",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#d8d8d8",
    },
  }),
  // INPUT ESCREVER
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  // PLACEHOLDER
  placeholder: (base) => ({
    ...base,
    color: "#aaa",
    fontWeight: "bold",
  }),
  indicatorSeparator: (base) => ({}),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#aaa",
    "&:hover": {
      color: "#aaa",
    },
  }),
};
