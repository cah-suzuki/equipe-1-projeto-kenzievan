import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 225px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  section {
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    padding: 5px 12px;
    gap: 5px;
    flex: 1;
    border-top: 1px solid var(--color-primary-100);
    ::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 768px) {
      border: none;
    }
  }

  @media (min-width: 768px) {
    border: none;
    padding: 0 0 10px;
  }
`;

export const MessageCard = styled.div`
  background-color: var(--color-primary-fading);
  border: 1px solid var(--color-primary-fading);
  color: var(--grey-1);
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    h3 {
      margin-right: auto;
      color: var(--grey-1);
      font-size: 15px;
      margin: 0;
    }

    div {
      display: flex;
      gap: 10px;

      span {
        color: var(--grey-1);
        font-size: 14px;
        font-weight: bold;
      }
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
  padding: 0 12px;
  border-radius: 5px;
  padding-top: 8px;
  box-sizing: border-box;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 45px 12px 15px;
    border: none;
    border-radius: 5px;
    border: 1px solid var(--color-primary-100);
  }

  button {
    position: absolute;
    top: 13px;
    right: 19px;
  }
`;
