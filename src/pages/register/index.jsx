import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/button";

function Register() {
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
    confirmPassword: yup
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

  return (
    <Container>
      <form></form>
      <p>Olá, preencha seus dados para efetuar seu</p>
      <h2>Cadastro</h2>
      <Input
        label="Nome"
        placeholder="Preencha seu nome completo"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        label="Email"
        placeholder="exemplo@exemplo.com"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <Input
        type="password"
        label="Senha"
        placeholder="Insira sua senha"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <Input
        type="paswword"
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <select name="Categoria">
        <option value="parent">Responsável</option>
        <option value="driver">Motorista</option>
      </select>
      <Button>Confirmar</Button>
    </Container>
  );
}

export default Register;
