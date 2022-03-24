import { Container } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const NavBar = ({ register, login, home, logoutButton }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const { logout } = useContext(UserContext);

  return (
    <Container>
      <h2>KenzieVan</h2>
      <nav>
        {login && (
          <Button onClick={() => handleNavigation("login")}>Entrar</Button>
        )}{" "}
        {register && (
          <Button onClick={() => handleNavigation("signup")}>
            Cadastre-se
          </Button>
        )}
        {home && <Button onClick={() => handleNavigation("/")}>Voltar</Button>}
        {logoutButton && <Button onClick={() => logout()}>Sair</Button>}
      </nav>
    </Container>
  );
};

export default NavBar;
