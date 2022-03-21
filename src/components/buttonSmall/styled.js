import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: var(--color-primary-100);
  width: 30px;
  height: 30px;
  border: none;
  border-radius: ${(props) => (props.isSquare ? "7px" : "50%")};
  font-size: 22px;
  color: var(--white);
`;
