import LoginImage from "../../assets/login_icon.png";
import Container from "./styles";
import Button from "../../components/button";
import Input from "../../components/Input";

import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/BackgroundImage.png";

function Login() {
  return (
    <Container>
      <section>
        <figure>
          <img src={LoginImage} alt="Imagem com três pessoas juntas" />
          <span>Bem vindo de volta!</span>
          <span>
            Efetue seu <span>Login</span>
          </span>
        </figure>
        <form>
          <label>Email</label>
          <Input placeholder="Email" />
          <label>Senha</label>
          <Input placeholder="Senha" type="password" />
          <Button>Login</Button>
        </form>
      </section>
      <SideBackground image={SideImage} />
    </Container>
  );
}

export default Login;
