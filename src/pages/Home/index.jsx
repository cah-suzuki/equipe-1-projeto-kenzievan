import { Contanier, Main, Footer, SideBackground } from "./styles";

import camilaIcon from "../../assets/img/camilaIcon.png";
import daniIcon from "../../assets/img/daniIcon.png";
import leoIcon from "../../assets/img/leoIcon.png";
import marcioIcon from "../../assets/img/marcioIcon.png";
import pauloIcon from "../../assets/img/pauloIcon.png";
import tiagoIcon from "../../assets/img/tiagoIcon.png";

// import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/SideImage.svg";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const token = localStorage.getItem("@KenzieVan:token");
  const history = useHistory();
  token && history.push("/dashboard");
  return (
    <Contanier>
      <NavBar login register />
      <Main>
        {/* <div> */}
        <span>
          KenzieVan é uma plataforma de comunicação entre pais e responsáveis e
          motoristas de vans escolares.
        </span>
        <SideBackground image={SideImage} />
        <span>
          Com kenzieVan você pode comunicar sobre faltas e atrasos de forma
          simples e evitar qualquer stress durante a viagem
        </span>
        <span>
          Principais Recursos:
          <ol>
            <li>Encontrar a van de forma rápida e fácil</li>
            <li> Acesso ao histórico de viagens</li>
            <li> Chat entre responsável e motorista</li>
            <li>Histórico de mensagens</li>
            <li> Visualização rápida de dados dos alunos </li>
            <li> Layout intuitivo e amigável</li>
          </ol>
        </span>
        <span>Cadastre-se e começe a usar hoje!</span>
        {/* </div> */}
      </Main>
      <Footer>
        <h2>Projeto desenvolvido por alunos da Kenzie Academy</h2>

        <div>
          <h3>Meet the Team</h3>
          <div>
            <a
              href="https://github.com/tiagomgm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiagoIcon}
                alt="ícone com foto do dev frontend tiago mota ao clicar leva ao github do mesmo"
              />
            </a>
            <a
              href="https://github.com/danielecalixto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={daniIcon}
                alt="ícone com foto da dev frontend daniele calixto ao clicar leva ao github da mesma"
              />
            </a>
            <a
              href="https://github.com/marcio-tonholo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={marcioIcon}
                alt="ícone com foto do dev frontend marcio jose ao clicar leva ao github do mesmo"
              />
            </a>
            <a
              href="https://github.com/leonardoliska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={leoIcon}
                alt="ícone com foto do dev leonardo liska ao clicar leva ao github do mesmo"
              />
            </a>
            <a
              href="https://github.com/pauloguarnieri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pauloIcon}
                alt="ícone com foto do dev frontend paulo guarnieri ao clicar leva ao github do mesmo"
              />
            </a>
            <a
              href="https://github.com/cah-suzuki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={camilaIcon}
                alt="ícone com foto da dev frontend camila suzuki ao clicar leva ao github da mesma"
              />
            </a>
          </div>
        </div>
      </Footer>
    </Contanier>
  );
}

export default Home;
