import {
  Container,
  HeaderContanier,
  GreetingContainer,
  DayContainer,
} from "./styles";
import NavBar from "../NavBar";
import { UserContext } from "../../providers/User";
import { useContext } from "react";

function Header() {
  const { user } = useContext(UserContext);
  const data = new Date();
  return (
    <Container>
      <NavBar logoutButton />
      <HeaderContanier>
        <GreetingContainer>
          <p>Olá, </p>
          <p>{user.name}</p>
        </GreetingContainer>
        <DayContainer>Hoje é: {data.toLocaleDateString()} </DayContainer>
      </HeaderContanier>
    </Container>
  );
}

export default Header;
