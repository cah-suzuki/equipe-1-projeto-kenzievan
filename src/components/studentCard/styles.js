import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid var(--color-primary-50);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;

  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
  }

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
  }

  @media (min-width: 650px) {
    flex-direction: column;
    padding: 1rem;

    span {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      text-align: left;
    }

    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
    }
  }
`;

export const Aberto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Times = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section + section {
    margin-top: 0.5rem;
  }

  span {
    margin-right: 5px;
  }

  p + span {
    margin-left: 5px;
  }

  @media (min-width: 650px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    section {
      justify-content: flex-end;
    }

    section + section {
      margin-top: 0.5rem;
    }

    span {
      margin-right: 5px;
    }

    p + span {
      margin-left: 10px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`;

export const About = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardInput = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    align-items: flex-start;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-primary-50);
  background-color: var(--color-text-box);
  padding: 5px;
  border-radius: 10px;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  textarea {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    font-family: "Nunito", sans-serif;
    resize: none;
  }
`;
