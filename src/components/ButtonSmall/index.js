import { Container } from "./styled";
import { IoIosArrowForward } from "react-icons/io";

const ButtonSmall = ({ icon: Icon = IoIosArrowForward, isSquare, ...rest }) => {
  return (
    <Container {...rest} isSquare={isSquare}>
      <Icon />
    </Container>
  );
};

export default ButtonSmall;
