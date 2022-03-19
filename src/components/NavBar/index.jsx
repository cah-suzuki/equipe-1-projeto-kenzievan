import { Container, Content } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";

const NavBar = ({ register, login, home, logout }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleNavigation("/");
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
        {home && <Button onClick={() => handleNavigation("/")}>Voltar</Button>}
        {logout && <Button onClick={() => handleLogout()}>Sair</Button>}
      </Content>
    </Container>
  );
};

export default NavBar;
