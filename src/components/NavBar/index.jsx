import { Container, Content } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const NavBar = ({ homePage, signupPage }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const { home, login } = useParams();

  console.log({ home });
  console.log({login})

  return (
    <Container>
      <h2>KenzieVan</h2>
      {homePage && (
        <Content>
          <Button onClick={() => handleNavigation("login")}>Entrar</Button>
          <Button onClick={() => handleNavigation("signup")}>
            Cadastre-se
          </Button>
        </Content>
      )}
      {signupPage && (
        <Content>
          <Button onClick={() => handleNavigation("login")}>Entrar</Button>
        </Content>
      )}
    </Container>
  );
};

export default NavBar;
