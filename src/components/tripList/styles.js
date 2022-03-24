import styled from "styled-components";

export const Contanier = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ul {
    width: 100%;

    li + li {
      margin-top: 10px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DateFilter = styled.input`
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 7px 15px;
  margin-bottom: 14px;
  background-color: var(--color-primary-50);
  border-radius: 12px;
  border: none;
`;

export const ListItem = styled.li`
  width: 100%;
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 37px;

    p + p {
      font-weight: bold;
    }
  }
`;
