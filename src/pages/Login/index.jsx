import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { useHistory, Redirect } from "react-router-dom";

import Container from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import SideBackground from "../../components/SideBackground";
import SideImage from "../../assets/SideImage.svg";

import { UserContext } from "../../providers/User";

function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { login, isAuth } = useContext(UserContext);

  const onSubmit = (data) => {
    login(data);
  };

  const history = useHistory();

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <NavBar home />
      <Container>
        <section>
          <figure>
            <FiLogIn />
            <span>Bem vindo de volta!</span>
            <span>
              Efetue seu <span>Login</span>
            </span>
          </figure>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              name="email"
              register={register}
              error={errors?.email}
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              register={register}
              error={errors?.password}
            />
            <Button type="submit">Login</Button>
            <p onClick={() => history.push("/signup")}>
              Ainda não possui um login? Cadastre-se
            </p>
          </form>
        </section>
        <SideBackground image={SideImage} />
      </Container>
    </>
  );
}

export default Login;
