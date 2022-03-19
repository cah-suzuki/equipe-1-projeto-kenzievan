import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/button";
import NavBar from "../../components/NavBar";
import SideBackground from "../../components/SideBackground";

import SideImage from "../../assets/SideImage.svg";
import { FiUsers } from "react-icons/fi";

function SignUp() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha deve ter pelo menos 8 caracteres, uma letra, um número e um símbolo"
      ),
    passwordConfirm: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <NavBar home />
      <Container>
        <section>
          <figure>
            <FiUsers />
            <span>
              Olá! Preencha seus dados para efetuar seu <span>Cadastro</span>
            </span>
          </figure>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              placeholder="Preencha seu nome completo"
              name="name"
              register={register}
              error={errors?.name}
            />
            <Input
              label="Email"
              placeholder="Preencha seu e-mail"
              name="email"
              register={register}
              error={errors?.email}
            />
            <Input
              type="password"
              label="Senha"
              placeholder="Insira sua senha"
              name="password"
              register={register}
              error={errors?.password}
            />
            <Input
              type="password"
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              name="passwordConfirm"
              register={register}
              error={errors?.passwordConfirm}
            />
            <select name="Categoria">
              <option value="parent">Responsável</option>
              <option value="driver">Motorista</option>
            </select>
            <Button>Confirmar</Button>
          </form>
        </section>
        <SideBackground image={SideImage} />
      </Container>
    </>
  );
}

export default SignUp;
