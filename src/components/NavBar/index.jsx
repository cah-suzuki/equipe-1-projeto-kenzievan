import { Container } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import schoolBus from "../../assets/lotties/school-bus.json";
import Lottie from "react-lottie";

const NavBar = ({ register, login, home, logoutButton, dashboard }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const { logout } = useContext(UserContext);

  const defaultOptionsBus = {
    loop: true,
    autoplay: true,
    animationData: schoolBus,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <span>
        <h2>KenzieVan</h2>
        <div className="lottie-bus">
          <Lottie resizeMode="contain" options={defaultOptionsBus} />
        </div>
      </span>
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
        {dashboard && (
          <Button onClick={() => handleNavigation("/")}>Voltar</Button>
        )}
      </nav>
    </Container>
  );
};

export default NavBar;
