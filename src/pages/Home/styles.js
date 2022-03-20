import styled from "styled-components";
import FooterBackground from "../../assets/FooterBackground.svg";
import SideBackgroundComponent from "../../components/SideBackground";

export const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
`;

export const Main = styled.main`
  padding: 10px 10% 40px;
  width: 100%;
  display: grid;
  flex: 1;
  align-content: space-between;
  gap: 0 20px;

  p {
    font-size: 19px;
    margin: 15px 0;
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;

    p:nth-child(n + 2) {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 800px) {
    p:nth-child(3) {
      grid-column: 1 / 2;
    }
  }
  @media (min-width: 1000px) {
    p {
      font-size: 20px;
    }
    p:nth-child(1) {
      grid-row: 2 / 3;
    }
    p:nth-child(3) {
      grid-row: 3 / 4;
    }
    p:nth-child(4) {
      grid-row: 4 / 5;
      grid-column: 1 / 2;
    }
  }

  @media (min-width: 1300px) {
    p {
      font-size: 22px;
    }

    p:nth-child(1) {
      grid-row: 2 / 3;
    }
    p:nth-child(3) {
      grid-row: 3 / 4;
    }
    p:nth-child(4) {
      grid-row: 4 / 5;
    }
  }
`;

export const SideBackground = styled(SideBackgroundComponent)`
  display: block;
  width: 80vw;
  min-width: 0;
  height: 66vw;
  order: -1;

  @media (min-width: 600px) {
    width: 45vw;
    height: 38vw;
    order: 0;
    margin: auto;
    grid-column: 2 / 3;
  }

  @media (min-width: 800px) {
    grid-row: 1 / 3;
  }
  @media (min-width: 1000px) {
    grid-row: 1 / 6;
    width: 40vw;
    height: 40vw;
  }
  @media (min-width: 1300px) {
    grid-row: 1 / 6;
    width: 40vw;
    height: 40vw;
    max-width: 549px;
    max-height: 445px;
  }
`;

export const Footer = styled.footer`
  position: relative;
  background: var(--color-secondary-100);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  justify-content: space-around;
  padding: 20px 8%;

  &::before {
    content: "";
    background-image: url(${FooterBackground});
    min-width: 100vw;
    position: absolute;
    top: -3.5vw;
    left: 0;
    background-size: 100vw;
    min-height: 3.5vw;
    background-repeat: no-repeat;
    z-index: -1;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: min(100%, 350px);

    h3 {
      text-align: center;
      font-size: 21px;
    }

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      gap: 15px 20px;
      width: 100%;

      img {
        margin: auto;
        width: min(100%, 70px);
      }
    }
  }

  @media (min-width: 1142px) {
    padding: 0 3% 0 5%;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-around;
    gap: 0 50px;
    padding-bottom: 15px;

    h2 {
      width: 340px;
      flex-grow: 1;
      max-width: 650px;
      align-self: center;
    }

    div {
      width: 660px;
      flex-direction: row;
      align-items: center;
      margin-top: -10px;

      h3 {
        font-size: 24px;
        margin-top: -10px;
      }

      div {
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
`;
