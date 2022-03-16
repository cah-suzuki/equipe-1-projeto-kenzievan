import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  label {
    width: 100%;
    font-size: 20px;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    box-shadow: 0px 4px 18px rgba(158, 168, 189, 0.31);
    background: var(--color-input);
    margin-top: 8px;

    :focus {
      outline: var(--color-text-box);
    }

    ::placeholder {
      font-size: inherit;
      color: var(--color-input);
    }
  }
`;
