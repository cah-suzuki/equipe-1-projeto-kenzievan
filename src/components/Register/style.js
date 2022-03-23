import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: white;
  margin-top: 10px;
  overflow: scroll;
  padding: 10px;
  border-radius: 20px;
  height: 80%;
  width: 85%;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header {
    display: flex;
    color: #f8f9fa;
    align-items: center;
    color: black;
    border-radius: 4px;
    padding-left: 5px;
    height: 80px;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 3;
      margin-left: 35px;

      svg {
        width: 34px;
        height: 36px;
      }

      span {
        //retirar font na integração
        font-family: "Nunito", sans-serif;
        font-weight: bold;
        font-size: 20px;

        span {
          color: orange;
        }
      }
    }

    form {
      div {
        display: flex;
      }
    }

    button {
      flex: 0.3;
    }
  }

  @media screen and (min-width: 500px) {
    max-width: 580px;
    width: 65%;

    .flex {
      flex-direction: row;
    }

    header {
      height: 80px;

      figure {
        margin-left: 50px;

        span {
          font-size: 22px;
        }
        svg {
          width: 44px;
          height: 46px;
        }
      }
    }
  }
`;
