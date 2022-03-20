import { Contanier, Main, Footer, FooterTop } from "./styles";
import TeamIcon from "../../assets/TeamIcon.png";

import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/SideImage.svg";
import NavBar from "../../components/NavBar";

function Home() {
  return (
    <Contanier>
      <NavBar login register />
      <Main>
        {/* <p>
          KenzieVan é uma plataforma de comunicação entre responsáveis e
          motoristas de vans escolares. Com kenzieVan você pode comunicar sobre
          faltas e atrasos de forma simples e evitar qualquer stress entre ambas
          as partesKey features:Encontrar a van de forma rápida e facil:
          descriçãoAcesso ao histórico de viagenstexto
          textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
        </p>
        <SideBackground image={SideImage} /> */}
      </Main>
      <Footer>
        <h2>Projeto desenvolvido por alunos da Kenzie Academy</h2>

        <div>
          <h3>Meet the Team</h3>
          <div>
            <img src={TeamIcon} alt="asdasd" />
            <img src={TeamIcon} alt="asdasd" />
            <img src={TeamIcon} alt="asdasd" />
            <img src={TeamIcon} alt="asdasd" />
            <img src={TeamIcon} alt="asdasd" />
            <img src={TeamIcon} alt="asdasd" />
          </div>
        </div>
      </Footer>
    </Contanier>
  );
}

export default Home;
