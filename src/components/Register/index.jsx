import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

// import { useState, useEffect } from "react";

import Input from "../../components/Input";
import Button from "../../components/button";
import Select from "../../components/Select";
import { FiUserPlus } from "react-icons/fi";
import { Container, Modal } from "./style";
//Importar o userContext para usar o token
// import { UserContext } from "../../providers/User";

//Importar student para fazer o post do novo student na api
// import { StudentContext } from "../../providers/Student";

function Register({ isRegisterActive, setIsRegisterActive }) {
  //instanciar o token se for necessario no get users
  //instanciar o user para pegar o id necessário para criar o novo student (driverId)
  // const { token,user } = useContext(UserContext);
  //seguestão : manter state local com a lista e dentro da chamada da api usar o setUserList
  //em seguida chamar o método handleList passando a lista da api

  //instanciar o método utilizado do student context
  //const {newStudent} = useContext(StudentContext)
  //Adicionar onClick do button chamando o método newStudent passando os dados
  //do método handleData
  let selectTimerMinutes = [];
  let selectTimerHour = [];
  let newList = [];
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    select: yup.object().shape({
      value: yup.string().required("Selecione uma opção"),
    }),
    address: yup
      .string()
      .required("Endereço obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    addressDistrict: yup
      .string()
      .required("Endereço obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    addressNumber: yup
      .number()
      .typeError("Deve ser um valor numérico")
      .required("Número obrigatório"),
    school: yup
      .string()
      .required("Nome obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    schoolAddress: yup
      .string()
      .required("Nome obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    schoolAddressDistrict: yup
      .string()
      .required("Nome obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    schoolAddressNumber: yup
      .number()
      .typeError("Deve ser um valor numérico")
      .required("Número obrigatório"),

    selectTimeDeparture: yup.object().shape({
      value: yup.string().required("Selecione uma opção"),
    }),
    selectTimeDepartureMinutes: yup.object().shape({
      value: yup.string().required("Selecione uma opção"),
    }),

    selectTimeArrival: yup.object().shape({
      value: yup.string().required("Selecione uma opção"),
    }),
    selectTimeArrivalMinutes: yup.object().shape({
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

  //fazer método get com useEffect e usar o token do usuario para fazer requisição get e receber a lista de usuarios

  let userList = [
    {
      email: "leoliska98@gmail.com",
      password: "$2a$10$Hhtu4znvDINTYnMMwxa7AuYB1ORan2KWvkDMj0ji.O5OxmoWUpd6e",
      name: "Leonardo",
      role: "parent",
      id: 2,
    },
    {
      email: "leoliska98@gmail.com",
      password: "$2a$10$Hhtu4znvDINTYnMMwxa7AuYB1ORan2KWvkDMj0ji.O5OxmoWUpd6e",
      name: "Leonardo",
      role: "driver",
      id: 3,
    },
  ];

  const handleList = (list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].role === "parent") {
        newList.push({
          value: list[i].id,
          label: list[i].name,
        });
      }
    }
  };

  handleList(userList);

  const selectTimer = () => {
    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        selectTimerMinutes.push({ value: "0" + i, label: "0" + i });
        selectTimerHour.push({ value: "0" + i, label: "0" + i });
      } else if (i < 24) {
        selectTimerMinutes.push({ value: i + "", label: i + "" });
        selectTimerHour.push({ value: i + "", label: i + "" });
      } else {
        selectTimerMinutes.push({ value: i + "", label: i + "" });
      }
    }
  };

  selectTimer();

  const handleNavigation = (path) => {
    setIsRegisterActive(false);
  };

  //handle data faz a conversão dos inputs para o obj que será enviado para api
  const handleData = (data) => {
    let newObj = {
      name: data.name,
      school: data.school,
      schoolAddress: `${data.schoolAddress} ${data.schoolAddressDistrict} ${data.schoolAddressNumber}`,
      address: `${data.address} ${data.addressDistrict} ${data.addressNumber}`,
      parentName: data.select.label,
      parentId: Number(data.select.value),
      driverId: 1,
      entryTime: `${data.selectTimeArrival.value}:${data.selectTimeArrivalMinutes.value}`,
      leaveTime: `${data.selectTimeDeparture.value}:${data.selectTimeDepartureMinutes.value}`,
      tripsList: [],
      messages: [],
    };
    console.log(newObj);
    return newObj;
  };

  //limpar imputs assim que abrir o modal
  const onSubmit = (data) => {
    handleData(data);
    handleNavigation("/");
  };
  //no onSubmit,fazer o tratamento dos dados e passar os dados tratados como parametro da função newStudent
  //newStudent(handleData(data))

  //substituir o botão do header para um smallButton com reactIcon fiX

  return (
    <>
      {isRegisterActive && (
        <Modal>
          <Container>
            <header>
              <figure>
                <FiUserPlus />
                <span>
                  Registro de <span>Novo Aluno</span>
                </span>
              </figure>
              <button onClick={() => handleNavigation("/")}>X</button>
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                name="name"
                register={register}
                error={errors?.name}
              />

              <Controller
                control={control}
                name="select"
                render={({ field: { name, value, onChange } }) => (
                  <Select
                    placeholder={"Selecione nome do responsável"}
                    name={name}
                    value={value}
                    error={errors.select?.value}
                    //select vai chamar o newList do estado local
                    options={newList}
                    onChange={onChange}
                  />
                )}
              />

              <Input
                label="Endereço"
                name="address"
                register={register}
                error={errors?.address}
              />
              <div className="flex">
                <Input
                  label="Bairro"
                  name="addressDistrict"
                  register={register}
                  error={errors?.addressDistrict}
                />
                <Input
                  label="Nº"
                  name="addressNumber"
                  register={register}
                  error={errors?.addressNumber}
                />
              </div>

              <Input
                label="Escola"
                name="school"
                register={register}
                error={errors?.school}
              />

              <Input
                label="Endereço"
                name="schoolAddress"
                register={register}
                error={errors?.schoolAddress}
              />
              <div className="flex">
                <Input
                  label="Bairro"
                  name="schoolAddressDistrict"
                  register={register}
                  error={errors?.schoolAddressDistrict}
                />
                <Input
                  label="Nº"
                  name="schoolAddressNumber"
                  register={register}
                  error={errors?.schoolAddressNumber}
                />
              </div>
              <div>
                <div className="flex">
                  <Controller
                    control={control}
                    name="selectTimeDeparture"
                    render={({ field: { name, value, onChange } }) => (
                      <Select
                        placeholder={"Horário de entrada HH:xx"}
                        name={name}
                        value={value}
                        error={errors.selectTimeDeparture?.value}
                        options={selectTimerHour}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="selectTimeDepartureMinutes"
                    render={({ field: { name, value, onChange } }) => (
                      <Select
                        placeholder={"Horário de entrada xx:MM"}
                        name={name}
                        value={value}
                        error={errors.selectTimeDepartureMinutes?.value}
                        options={selectTimerMinutes}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="selectTimeArrival"
                    render={({ field: { name, value, onChange } }) => (
                      <Select
                        placeholder={"Horário de saída HH:xx"}
                        name={name}
                        value={value}
                        error={errors.selectTimeArrival?.value}
                        options={selectTimerHour}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="selectTimeArrivalMinutes"
                    render={({ field: { name, value, onChange } }) => (
                      <Select
                        placeholder={"Horário de saída xx:MM"}
                        name={name}
                        value={value}
                        error={errors.selectTimeArrivalMinutes?.value}
                        options={selectTimerMinutes}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="flex">
                <Button>Confirmar</Button>
              </div>
            </form>
          </Container>
        </Modal>
      )}
    </>
  );
}

export default Register;
