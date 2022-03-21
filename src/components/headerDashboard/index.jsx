import {
  Container,
  HeaderContanier,
  GreetingContainer,
  DayContainer,
} from "./styles";
import NavBar from "../NavBar";

function Header({ name }) {
  const data = new Date();
  return (
    <Container>
      <NavBar logout />
      <HeaderContanier>
        <GreetingContainer>
          <p>Olá, </p>
          <p>{name}</p>
        </GreetingContainer>
        <DayContainer>Hoje é: {data.toLocaleDateString()} </DayContainer>
      </HeaderContanier>
    </Container>
  );
}

export default Header;
