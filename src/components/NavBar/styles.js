import styled from "styled-components";
import NavBackground from "../../assets/NavBackground.svg";

export const Container = styled.header`
  background: url(${NavBackground}) no-repeat;
  width: 100%;
  min-height: calc(13.05vw + 15px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: 100vw;
  border-top: 15px solid var(--color-secondary-100);
  padding: 0 3%;

  .lottie {
    display: none;
  }

  .lottie-bus {
    display: flex;
    width: 40px;
    height: 20px;
  }

  h2 {
    margin-top: -30px;
    color: #fa8223;
    font-weight: 700;
    font-size: 60px;
    font-size: max(4.16vw, 20px);
    /* margin: 2vw 0 0 1.5vw; */
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    margin-top: -30px;
  }

  button {
    font-weight: 700;
    font-size: 14px;
    color: #fa8223;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }
  button + button {
    color: #222428;
  }

  @media screen and (min-width: 500px) {
    .lottie {
      display: flex;
      width: 60px;
      height: 40px;
    }

    button {
      font-size: max(2vw, 18px);
    }

    span {
      flex-direction: row;
    }

    .lottie-bus {
      display: flex;
      width: 60px;
      height: 40px;
      margin-top: -30px;
    }
  }
`;

export const Content = styled.div``;
