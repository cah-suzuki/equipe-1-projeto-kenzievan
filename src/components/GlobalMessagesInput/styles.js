import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border-radius: 10px;
  border: 1px solid var(--color-primary-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  color: var(--grey-1);
  h1 {
    font-size: 20px;
    margin: 15px 0;
  }

  button {
    margin: 10px;
    background-color: transparent;
    border: none;
    font-size: 17px;
    :hover {
      text-decoration: underline;
    }
  }

  button + button {
    margin-bottom: 20px;
  }
`;

export const MessageForm = styled.div`
  width: 85%;
  height: 131px;
  background-color: #fff3e9;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  padding: 11px;
  textarea {
    resize: none;
    background-color: transparent;
    padding-bottom: 80px;
    font-size: 20px;
    border: none;
    width: 80%;
    height: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary-50);
    border: none;
    border-radius: 50px;
    color: #fff;
    align-self: center;
    margin: 0;
  }
`;
