import { Container } from "./styled";


const ButtonSmall = ({ figcaption, src, ...rest }) => {
  return (
    <Container {...rest}>
      <figure>
        <img src={src}/>
        <figcaption>{figcaption}</figcaption>
      </figure>
    </Container>
  );
};

export default ButtonSmall;
