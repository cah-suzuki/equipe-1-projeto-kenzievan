import styled from "styled-components";
import HeaderImg from "../../assets/HeaderImg.png";

export const Container = styled.header`
  background-image: url(${HeaderImg});
  height: 188px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-size: 100% 100%;

  h2 {
    color: #fa8223;
    font-weight: 700;
    font-size: 60px;
    margin: 40px 30px;
  }

  div {
    margin: 0 35px;
    align-self: center;
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
  button {
    font-weight: 700;
    font-size: 26px;
    line-height: 24px;
    color: #fa8223;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }
  button + button {
    color: #222428;
  }
`;

export const Content = styled.div``;
