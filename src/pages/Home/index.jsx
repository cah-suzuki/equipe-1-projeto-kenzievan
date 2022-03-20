import { Contanier, Main, Footer, SideBackground } from "./styles";
import TeamIcon from "../../assets/TeamIcon.png";

// import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/SideImage.svg";
import NavBar from "../../components/NavBar";

function Home() {
  return (
    <Contanier>
      <NavBar login register />
      <Main>
        {/* <div> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          labore consequuntur aspernatur. Fugit, distinctio molestias culpa
          cumque neque vel dolores.
        </p>
        <SideBackground image={SideImage} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          labore consequuntur aspernatur. Fugit, distinctio molestias culpa
          cumque neque vel dolores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          labore consequuntur aspernatur. Fugit, distinctio molestias culpa
          cumque neque vel dolores.
        </p>
        {/* </div> */}
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
