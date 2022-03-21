import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  background-color: var(--color-secondary-50);

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  order: 2;
  width: 100%;
  @media (min-width: 1024px) {
    order: 1;
    width: 65%;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  order: 1;
  width: 100%;
  @media (min-width: 1024px) {
    order: 2;
    width: 25%;
  }
`;
