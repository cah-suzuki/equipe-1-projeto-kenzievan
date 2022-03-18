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

  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default Container;
