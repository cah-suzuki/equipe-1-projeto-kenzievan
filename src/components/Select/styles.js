import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 10px;

  span {
    font-size: 12px;
    color: var(--color-error);
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
    color: "var(--black)",
    border: "2px solid var(--color-placeholder)",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "none",
    fontSize: "16px",
    "&:hover": {
      borderColor: "var(--color-placeholder)",
    },
  }),
  // OPTION ESCOLHIDA
  singleValue: (base) => ({
    ...base,
    color: "var(--black)",
  }),
  // MENU BOX
  menu: (base) => ({
    ...base,
    background: "var(--white)",
  }),
  // OPTION IN MENU BOX
  option: (base, state) => ({
    ...base,
    color: "var(--black)",
    cursor: "pointer",
    transition: "0.2s",
    backgroundColor: state.isSelected ? "#ebeced" : "var(--white)",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#e1e3e6",
    },
  }),
  // INPUT ESCREVER
  input: (base) => ({
    ...base,
    color: "var(--black)",
  }),
  // PLACEHOLDER
  placeholder: (base) => ({
    ...base,
    color: "var(--color-placeholder)",
  }),
  indicatorSeparator: (base) => ({}),
  dropdownIndicator: (base) => ({
    ...base,
    color: "var(--color-placeholder)",
    "&:hover": {
      color: "var(--color-placeholder)",
    },
  }),
};
