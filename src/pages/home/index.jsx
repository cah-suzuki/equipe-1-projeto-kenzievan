import { Contanier, Header, Main, Bottom } from "./styles";
import Button from "../../components/button";
import TeamIcon from "./assets/TeamIcon.png";
import LandingImage from "./assets/LandingImage.png";
import { useHistory } from "react-router-dom";

import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/BackgroundImage.png";

function Home() {
  const history = useHistory();
  return (
    <Contanier>
      <Header>
        <p>KenzieVan</p>
        <div>
          <Button onClick={() => history.push("/login")}>Login</Button>
          <Button onClick={() => history.push("/signup")}>Cadastre-se</Button>
        </div>
      </Header>
      <Main>
        <p>
          KenzieVan é uma plataforma de comunicação entre responsáveis e
          motoristas de vans escolares. Com kenzieVan você pode comunicar sobre
          faltas e atrasos de forma simples e evitar qualquer stress entre ambas
          as partesKey features:Encontrar a van de forma rápida e facil:
          descriçãoAcesso ao histórico de viagenstexto
          textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
        </p>
        <SideBackground image={SideImage} />
      </Main>
      <Bottom>
        <span>
          <p>About us:</p>
          <p>projeto desenvolvido no capstone do módulo 3 da kenzie Academy </p>
        </span>

        <div>
          <p>Meet the team:</p>
          <img src={TeamIcon} alt="asdasd" />
          <img src={TeamIcon} alt="asdasd" />
          <img src={TeamIcon} alt="asdasd" />
          <img src={TeamIcon} alt="asdasd" />
          <img src={TeamIcon} alt="asdasd" />
          <img src={TeamIcon} alt="asdasd" />
        </div>
      </Bottom>
    </Contanier>
  );
}


export default Home;
