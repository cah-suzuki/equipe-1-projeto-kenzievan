import styled from "styled-components";

const Container = styled.div`
  width: 40%;
  height: 100%;
  min-height: 600px;
  max-height: 720px;
  min-width: 550px;
  max-width: 700px;
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
