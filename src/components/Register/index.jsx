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

    entryTime: yup.string().required("Selecione um horário"),
    departureTime: yup.string().required("Selecione um horário"),
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

  const handleNavigation = (path) => {
    setIsRegisterActive(false);
  };

  const formatData = ({
    name,
    school,
    schoolAddress,
    schoolAddressDistrict,
    schoolAddressNumber,
    address,
    addressDistrict,
    addressNumber,
    entryTime,
    departureTime,
    select,
  }) => {
    const formattedData = {
      name,
      school,
      schoolAddress: `${schoolAddress} ${schoolAddressDistrict} ${schoolAddressNumber}`,
      address: `${address} ${addressDistrict} ${addressNumber}`,
      parentName: select.label,
      parentId: select.value,
      driverId: String(user.id),
      entryTime,
      departureTime,
      tripsList: [],
      messages: [],
    };
    return formattedData;
  };

  const onSubmit = (data) => {
    const formattedData = formatData(data);
    console.log(formattedData);
    newStudent(formattedData);
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
                  <Input
                    type="time"
                    label="Saída"
                    name="departureTime"
                    register={register}
                    error={errors?.departureTime}
                  />
                  <Input
                    type="time"
                    label="Entrada"
                    name="entryTime"
                    register={register}
                    error={errors?.entryTime}
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
