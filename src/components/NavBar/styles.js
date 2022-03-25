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

  .clouds {
    width: 60px;
    height: 50px;
    position: absolute;
    top: 0px;
  }

  .one {
    animation: wheel1 30s;
    animation-iteration-count: infinite;
  }
  .two {
    animation: wheel1 15s;
    animation-iteration-count: infinite;
  }

  @keyframes wheel1 {
    0% {
      transform: translate(0vw, 0px);
    }
    100% {
      transform: translate(86vw, 0px);
    }
  }

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
    font-size: max(2vw, 18px) !important;
    color: #fa8223;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    z-index: 4;
  }
  button + button {
    color: #222428;
  }

  @media (min-width: 500px) {
    .clouds {
      width: 90px;
      height: 50px;
      position: absolute;
      top: 0px;
    }

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
      width: 30px;
      height: 25px;
      margin-top: -30px;
    }
  }

  @media (min-width: 750px) {
    .clouds {
      width: 120px;
      height: 70px;
      position: absolute;
      top: 0px;
    }
    .lottie-bus {
      width: 40px;
      height: 35px;
    }
    .lottie {
      width: 100px;
      height: 80px;
    }
  }
  @media (min-width: 1024px) {
    .clouds {
      width: 150px;
      height: 70px;
      position: absolute;
      top: 0px;
    }

    .lottie {
      width: 100px;
      height: 80px;
    }
  }
  @media (min-width: 1600px) {
    .clouds {
      width: 200px;
      height: 70px;
      position: absolute;
      top: 0px;
    }
    .lottie-bus {
      width: 100px;
      height: 60px;
    }
    .lottie {
      width: 150px;
      height: 80px;
    }
  }
`;

export const Content = styled.div``;
