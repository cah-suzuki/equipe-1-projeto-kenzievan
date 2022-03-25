import styled from "styled-components";

export const Container = styled.div`
  padding: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    width: 30%;
    order: 1;
    min-width: 300px;
  }
`;
