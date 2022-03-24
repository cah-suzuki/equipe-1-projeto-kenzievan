import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/button";
import Select from "../../components/Select";
import Api from "../../services/api";
import { FiUserPlus, FiX } from "react-icons/fi";

import ButtomSmall from "../buttonSmall/index";
import { Container, Modal } from "./style";
import { useEffect, useState, useContext } from "react";

import { UserContext } from "../../providers/User";

import { StudentContext } from "../../providers/Students";

function Register({ isRegisterActive, setIsRegisterActive }) {
  const { user } = useContext(UserContext);

  const { newStudent } = useContext(StudentContext);

  const [allParents, setAllParents] = useState([]);

  let selectTimerMinutes = [];
  let selectTimerHour = [];

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
      value: yup
        .string()
        .required("Selecione uma opção")
        .nullable()
        .typeError("Error"),
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    Api.get("/_users").then((response) => {
      const allParents = response.data.map((user) => {
        if (user.role === "parent") {
          return {
            value: user.id,
            label: user.name,
          };
        }
      });

      setAllParents(allParents);
    });
  }, []);

  console.log(allParents);

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

  const handleData = (data) => {
    let newObj = {
      name: data.name,
      school: data.school,
      schoolAddress: `${data.schoolAddress} ${data.schoolAddressDistrict} ${data.schoolAddressNumber}`,
      address: `${data.address} ${data.addressDistrict} ${data.addressNumber}`,
      parentName: data.select.label,
      parentId: data.select.value,
      driverId: user.id + "",
      entryTime: `${data.selectTimeArrival.value}:${data.selectTimeArrivalMinutes.value}`,
      leaveTime: `${data.selectTimeDeparture.value}:${data.selectTimeDepartureMinutes.value}`,
      tripsList: [],
      messages: [],
    };
    console.log(newObj);
    return newObj;
  };

  const onSubmit = (data) => {
    let newData = handleData(data);
    newStudent(newData);
    reset();
    handleNavigation("/");
  };

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
              <ButtomSmall
                icon={FiX}
                onClick={() => handleNavigation("/")}
              ></ButtomSmall>
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
                    options={allParents}
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
                  {/* <Input
                    type="time"
                    label="Horário de entrada HH:xx"
                    name="selectTimeDeparture"
                    register={register}
                    error={errors?.selectTimeDeparture}
                  />
                  <Input
                    type="time"
                    label="Horário de entrada xx:MM"
                    name="selectTimeDepartureMinutes"
                    register={register}
                    error={errors?.selectTimeDepartureMinutes}
                  />
                  <Input
                    type="time"
                    label="Horário de saída HH:xx"
                    name="selectTimeArrival"
                    register={register}
                    error={errors?.selectTimeArrival}
                  />
                  <Input
                    type="time"
                    label="Horário de saída xx:MM"
                    name="selectTimeArrivalMinutes"
                    register={register}
                    error={errors?.selectTimeArrivalMinutes}
                  /> */}

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
