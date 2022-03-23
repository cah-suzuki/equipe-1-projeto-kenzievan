import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  border-radius: 5px;
  border: 1px solid var(--color-primary-fading);

  section {
    padding: 8px;
    height: 125px;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const MessageCard = styled.div`
  background-color: var(--color-primary-fading);
  border: 1px solid var(--color-primary-fading);
  color: var(--grey-1);
  max-width: 300px;
  padding: 8px;
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
      color: var(--grey-1);
      font-size: 14px;
      margin: 0;
    }
  }
  p {
    margin-top: 5px;
    color: var(--grey-1);
    font-size: 14px;
    max-width: 100%;
    line-break: normal;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 8px;
  border-top: 1px solid var(--color-primary-fading);
  box-sizing: border-box;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 45px 12px 15px;
    border: none;
    border-radius: 5px;
    border: 1px solid var(--color-primary-fading);
  }

  button {
    position: absolute;
    top: 13px;
    right: 15px;
  }
`;
