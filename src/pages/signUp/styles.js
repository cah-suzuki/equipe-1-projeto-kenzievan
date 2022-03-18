import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 5%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 1024px) {
    padding: 0 2% 0 5%;
  }

  section {
    box-shadow: 0px 4px 20px rgba(77, 166, 186, 0.38);
    border-radius: 20px;
    padding: 16px 20px 60px;
    width: min(400px, 100%);
    flex-shrink: 0;
    height: min-content;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      img {
        width: 50px;
      }

      span {
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        > span {
          color: var(--color-primary-100);
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      button {
        margin-top: 30px;
      }
    }
  }
`;

export default Container;
