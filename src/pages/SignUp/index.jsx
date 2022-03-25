import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/button";
import NavBar from "../../components/NavBar";
import SideBackground from "../../components/SideBackground";
import Select from "../../components/Select";
import Api from "../../services/api";

import SideImage from "../../assets/SideImage.svg";
import { FiUsers } from "react-icons/fi";
import { useHistory, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

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
      .min(8, "A senha deve ter pelo menos 8 caractéres")
      .matches(
        "^(?=.*[a-z])",
        "A senha deve conter pelo menos uma letra minúscula"
      )
      .matches(
        "^(?=.*[A-Z])",
        "A senha deve conter pelo menos uma letra maiúscula"
      )
      .matches("^(?=.*[0-9])", "A senha deve conter pelo menos um número")
      .matches(
        "^(?=.*[!@#$%^&*])",
        "A senha deve conter pelo menos um símbolo"
      ),
    passwordConfirm: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
    role: yup.object().shape({
      value: yup.string().required("Selecione uma opção"),
    }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmit = ({ name, email, password, role: { value } }) => {
    const newUser = { name, email, password, role: value };

    Api.post("/signup", newUser)
      .then((response) => {
        delete newUser.password;
        newUser.id = response.data.id;
        Api.post("/_users", newUser).catch((error) => console.log(error));
        history.push("/login");
        toast.success("Conta cadastrada com sucesso!");
      })
      .catch(() => toast.error("Não foi possível cadastrar a conta!"));
  };

  const { isAuth } = useContext(UserContext);

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <NavBar home />
      <Container>
        <section>
          <figure>
            <FiUsers />
            <h3>
              Olá! Preencha seus dados para efetuar seu <span>Cadastro</span>
            </h3>
            <p onClick={() => history.push("/login")}>
              Já tem uma conta? Faça login!
            </p>
          </figure>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              name="name"
              register={register}
              error={errors?.name}
            />
            <Input
              label="Email"
              name="email"
              register={register}
              error={errors?.email}
            />
            <Input
              type="password"
              label="Senha"
              name="password"
              register={register}
              error={errors?.password}
            />
            <Input
              type="password"
              label="Confirmação de senha"
              name="passwordConfirm"
              register={register}
              error={errors?.passwordConfirm}
            />
            <Controller
              control={control}
              name="role"
              render={({ field: { name, value, onChange } }) => (
                <Select
                  name={name}
                  value={value}
                  error={errors.role?.value}
                  options={[
                    {
                      value: "parent",
                      label: "Responsável",
                    },
                    {
                      value: "driver",
                      label: "Motorista",
                    },
                  ]}
                  onChange={onChange}
                />
              )}
            />
            <Button>Confirmar</Button>
          </form>
        </section>
        <SideBackground image={SideImage} />
      </Container>
    </>
  );
}

export default SignUp;
