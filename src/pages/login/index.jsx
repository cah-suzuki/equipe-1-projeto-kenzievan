import LoginImage from "../../assets/login_icon.png";
import Container from "./styles";
import Button from "../../components/button";
import Input from "../../components/Input";

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
          <Input label="Email" placeholder="Email" />
          <Input label="Senha" placeholder="Senha" type="password" />
          <Button>Login</Button>
        </form>
      </section>
    </Container>
  );
}

export default Login;
