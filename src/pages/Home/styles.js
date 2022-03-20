import styled from "styled-components";
import FooterBackground from "../../assets/FooterBackground.svg";

export const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

export const Main = styled.main`
  display: flex;
  padding: 0 10%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 40px;

  p {
    margin: 0 20px;
    word-break: break-all;
    width: 40%;
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
