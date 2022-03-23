import { Container } from "./styled";
import { IoIosArrowForward } from "react-icons/io";
import { fiX } from "react-icons/fi";

const ButtonSmall = ({ icon: Icon = IoIosArrowForward, isSquare, ...rest }) => {
  return (
    <Container {...rest} isSquare={isSquare}>
      <Icon />
    </Container>
  );
};

export default ButtonSmall;
