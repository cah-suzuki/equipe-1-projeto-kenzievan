import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 5% 25px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 1024px) {
    padding: 0 2% 0 5%;
  }

  section {
    box-shadow: 0px 4px 20px rgba(77, 166, 186, 0.38);
    border-radius: 20px;
    padding: 16px 20px 20px;
    width: min(480px, 100%);
    flex-shrink: 0;
    height: min-content;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      svg {
        width: 40px;
        height: 40px;
      }

      h3 {
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        max-width: 350px;
        > span {
          color: var(--color-primary-100);
        }
      }
    }

    form {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;

      button {
        width: 100%;
      }

      @media (min-width: 500px) {
        > div:nth-child(3),
        > div:nth-child(4) {
          width: calc(50% - 7.5px);
        }
      }
    }
    p {
      cursor: pointer;
      font-weight: bold;
      font-size: 17px;
      text-align: center;
      text-decoration: underline;
    }
  }
`;

export default Container;
