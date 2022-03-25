import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--color-primary-50);
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: 700;
    color: var(--grey-1);
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

export const MessageContainer = styled.div`
  border: 1px solid var(--color-primary-50);
  background-color: white;
  padding: 6px 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  max-height: 290px;
  overflow-y: auto;
  width: 100%;
`;

export const EmptyMessageContainer = styled.div`
  border: 1px solid var(--color-primary-50);
  background-color: var(--color-primary-fading);
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    font-size: 14px;
  }
`;

export const MessageCard = styled.div`
  background-color: var(--color-primary-fading);
  border: 1px solid var(--color-primary-100);
  color: var(--grey-1);
  padding: 8px;
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
      color: var(--grey-1);
      font-size: 14px;
      margin: 0;
    }
  }
  p {
    color: var(--grey-1);
    font-size: 15px;
  }
`;
