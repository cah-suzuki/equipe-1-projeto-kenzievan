import styled from "styled-components";
import BottomImg from "./assets/BottomImg.png";

export const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  padding: 0 10%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;

  p {
    margin: 0 20px;
    word-break: break-all;
    width: 40%;
  }
`;

export const Bottom = styled.footer`
  align-self: flex-end;
  background-image: url(${BottomImg});
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding-top: 25px;
  font-size: 24px;
  span {
    display: flex;
    align-items: flex-end;
    p + p {
      margin-left: 10px;
      padding-bottom: 3px;
      font-size: 20px;
    }
  }
  div {
    display: flex;
    align-items: flex-end;
  }

  img {
    width: 57px;
    height: 57px;
    margin-left: 10px;
  }
`;
