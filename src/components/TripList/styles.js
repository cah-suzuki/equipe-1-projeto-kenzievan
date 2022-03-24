import styled from "styled-components";

export const Contanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 12px;
    height: 100%;
    border-top: 1px solid var(--color-primary-100);
    border-right: 1px solid var(--color-primary-100);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 0 12px;

  input {
    padding: 10px 10px 5px;
    border-radius: 5px;
    border: 1px solid var(--color-primary-100);
    background: var(--color-primary-fading);
  }

  @media (min-width: 768px) {
    flex: 0;
    border-right: 1px solid var(--color-primary-100);
    height: 100%;

    h4 {
      font-size: 17px;
    }

    input {
      width: 160px;
      padding: 5px;
    }
  }
`;

export const MessagesContainer = styled.ul`
  display: flex;
  gap: 5px !important;
  max-height: 200px;
  overflow: auto;
  width: 100%;
  padding: 5px 12px;
  border-bottom: 1px solid var(--color-primary-100);
  border-top: 1px solid var(--color-primary-100);
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    border: 1px solid var(--color-primary-100);
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;

    h3 {
      width: 100%;
      text-align: center;
      font-size: 16px;
      background-color: var(--color-primary-fading);
      padding: 3px 10px;
    }

    div {
      padding: 3px 5px;
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      border-top: 1px solid var(--color-primary-100);
      font-weight: bold;
      font-size: 14px;
    }

    div + div {
      border-left: 1px solid var(--color-primary-100);
    }
  }
  @media (min-width: 768px) {
    flex: 1;
    max-height: 100px;
    border: none;
    margin: 5px 0;
  }
`;
