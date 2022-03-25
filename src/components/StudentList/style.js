import styled from "styled-components";

export const Container = styled.div`
  border: solid orange 1px;
  display: flex;
  flex-direction: column;
  padding: 22px;
  font-family: "Nunito", sans-serif;
  border-radius: 10px;
  width: 100%;
  gap: 30px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 24px;
    align-items: center;
    gap: 10px;

    button {
      /* background: var(--color-primary-100); */
      background-color: #fa8223;
      color: white;
      border: solid orange 1px;
      width: 100%;
      border-radius: 10px;
      padding: 5px 12px;
    }

    h2 {
      font-size: 24px;
    }

    @media (min-width: 550px) {
      flex-direction: row;

      button {
        min-width: 190px;
        width: 190px;
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
