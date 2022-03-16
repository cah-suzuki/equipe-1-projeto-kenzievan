import styled from "styled-components";

const Container = styled.div`
  width: max(40%, 450px);
  flex-shrink: 0;
  position: relative;
  height: 100%;
  max-height: 800px;
  min-width: 600px;

  img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Container;
