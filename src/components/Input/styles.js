import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 8px;

  input {
    padding: 14px 16px;
    background-color: var(--white);
    box-shadow: 5px 2px 20px -15px rgba(0, 0, 0, 0.8);
    border: 1px solid;
    border-color: var(--color-placeholder);
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;

    &:focus {
      outline: 0;
      border-color: var(--color-primary-100);
    }
    &:focus ~ label {
      top: -11px;
      left: 12px;
      font-size: 14px;
      color: var(--color-primary-100);
      font-weight: bold;
    }
  }

  &.input--error input {
    border-color: var(--color-error) !important;
  }

  &.input--error label {
    color: var(--color-error) !important;
  }

  label {
    position: absolute;
    top: ${(props) => (props.isInputEmpty ? "13px" : "-11px")};
    left: 12px;
    background-color: var(--white);
    padding: 0 5px;
    transition: 0.2s;
    color: var(--color-placeholder);
    font-weight: 600;
    font-size: ${(props) => (props.isInputEmpty ? "16px" : "14px")};
    font-weight: ${(props) => (props.isInputEmpty ? "normal" : "bold")};
    pointer-events: none;
  }
  span {
    width: 100%;
    font-size: 11px;
    font-weight: bold;
    box-sizing: border-box;
    color: var(--color-error);
    position: absolute;
    top: 49px;
    left: 5px;
  }
`;

export default Container;
