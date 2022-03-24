import styled from "styled-components";

export const Container = styled.div`
  border: solid orange 1px;
  display: flex;
  flex-direction: column;
  padding: 22px;
  font-family: "Nunito", sans-serif;
  border-radius: 10px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    font-size: 24px;

    button {
      /* background: var(--color-primary-100); */
      background-color: #fa8223;
      color: white;
      height: 65px;
      width: 190px;
    }

    h2 {
      font-size: 24px;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      button {
        border: solid orange 1px;
        border-radius: 10px;
        margin-bottom: 12px;
        width: 96%;
        height: 70px;
        padding: 12px;
      }
    }
  }
`;
