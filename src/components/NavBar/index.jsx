import { Container, Content } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";

const NavBar = ({ register, login }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h2>KenzieVan</h2>
      <Content>
        {login && (
          <Button onClick={() => handleNavigation("login")}>Entrar</Button>
        )}{" "}
        {register && (
          <Button onClick={() => handleNavigation("signup")}>
            Cadastre-se
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default NavBar;
