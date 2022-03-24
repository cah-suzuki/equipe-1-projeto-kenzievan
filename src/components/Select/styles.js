import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 8px;

  span {
    font-size: 11px;
    font-weight: bold;
    color: var(--color-error);
    position: absolute;
    left: 5px;
    top: 90%;
  }
`;

export const customStyles = {
  // INPUT BOX
  control: (base, { selectProps: { error } }) => ({
    ...base,
    minHeight: "40px",
    background: "var(--white)",
    color: "var(--black)",
    border: `2px solid ${
      error ? "var(--color-error) !important" : "var(--color-placeholder)"
    }`,
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
  placeholder: (base, { selectProps: { error } }) => ({
    ...base,
    color: error ? "var(--color-error)" : "var(--color-placeholder)",
  }),
  indicatorSeparator: (base) => ({}),
  dropdownIndicator: (base, { selectProps: { error } }) => ({
    ...base,
    color: error ? "var(--color-error) !important" : "var(--color-placeholder)",
    "&:hover": {
      color: error
        ? "var(--color-error) !important"
        : "var(--color-placeholder)",
    },
  }),
};
