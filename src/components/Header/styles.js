import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(131, 243, 250, 0.5);

  button {
    font-size: 14px;
  }
`;

export const HeaderContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
`;

export const GreetingContainer = styled.div`
  display: flex;
  p {
    color: var(--color-primary-50);
    font-weight: 700;
    font-size: max(3.16vw, 15px);
  }
  p + p {
    margin-left: 5px;
    color: var(--grey-1);
  }
`;

export const DayContainer = styled.p`
  font-weight: 700;
  font-size: max(2.16vw, 15px);
  color: var(--grey-1);
`;
