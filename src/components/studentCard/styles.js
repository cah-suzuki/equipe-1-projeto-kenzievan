import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid var(--color-primary-50);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  h3 {
    font-weight: bold;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 26px;
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 30px;
  padding: 12px;
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
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-primary-100);

  @media (min-width: 768px) {
    border-bottom: 1px solid var(--color-primary-100);
    flex-direction: row;
    padding: 0;
    border-bottom: none;
  }
`;

export const About = styled.div`
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid var(--color-primary-100);

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid var(--color-primary-100);
    width: 50%;
    justify-content: space-evenly;
  }
`;

export const CardInput = styled.div`
  /* padding: 12px; */
  padding-bottom: 10px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
