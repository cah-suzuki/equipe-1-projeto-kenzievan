import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 10%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;

  section {
    box-shadow: 0px 4px 20px rgba(77, 166, 186, 0.38);
    border-radius: 20px;
    padding: 16px 30px 60px;
    width: min(400px, 90%);
    min-width: 300px;
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

      input + label {
        margin-top: 15px;
      }

      label + input {
        margin-top: 8px;
      }

      button {
        margin-top: 50px;
      }
    }
  }
`;

export default Container;
