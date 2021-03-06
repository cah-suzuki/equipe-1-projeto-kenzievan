import styled from "styled-components";

const Container = styled.div`
  width: 40%;
  height: 100%;
  max-width: 600px;
  min-width: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.image}) no-repeat;
  background-size: 100%;
  background-position: center;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export default Container;
