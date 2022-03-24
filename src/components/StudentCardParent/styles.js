import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid var(--color-primary-50);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-bottom: 10px;
  position: relative;
  z-index: 1;

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 26px;
    }
    h4 {
      font-weight: bold;
      font-size: 14px;
    }
    padding-bottom: 0px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 30px;
  padding: 12px;
  border-bottom: 1px solid var(--color-primary-100);
`;

export const TimesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 0 5px;

    span {
      padding: 0;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const BottomContainer = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const About = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px;
  border-bottom: 1px solid var(--color-primary-100);

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid var(--color-primary-100);
  }
`;

export const TripsContainer = styled.div`
  margin-bottom: 10px;
  padding-top: 10px;

  @media (min-width: 768px) {
    order: 1;
    padding: 0;
    margin: 0;
  }
`;

export const MessagesContainer = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
`;
