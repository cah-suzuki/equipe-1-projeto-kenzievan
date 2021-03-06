import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Api from "../../services/api";
import { FiUserPlus } from "react-icons/fi";

import { Container, Modal } from "./style";
import { useEffect, useState, useContext } from "react";

import { UserContext } from "../../providers/User";

import { StudentContext } from "../../providers/Students";

function Register({ handleModal }) {
  const { user } = useContext(UserContext);

  const { newStudent } = useContext(StudentContext);

  const [selectOptions, setSelectOptions] = useState([]);

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
      .required("Bairro obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    addressNumber: yup
      .number()
      .typeError("Deve ser um valor numérico")
      .required("Número obrigatório"),
    school: yup
      .string()
      .required("Nome da escola obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    schoolAddress: yup
      .string()
      .required("Endereço obrigatório")
      .matches(/[A-Za-z]/, "Apenas letras"),
    schoolAddressDistrict: yup
      .string()
      .required("Bairro obrigatório")
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
      const allParents = response.data.filter((user) => user.role === "parent");
      const selectOptions = allParents.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
      setSelectOptions(selectOptions);
    });
  }, []);

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
      schoolAddress: `${schoolAddress}, ${schoolAddressDistrict}, ${schoolAddressNumber}`,
      address: `${address}, ${addressDistrict}, ${addressNumber}`,
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
    newStudent(formattedData);
    reset();
    handleModal();
  };

  return (
    <Modal>
      <Container>
        <header>
          <figure>
            <FiUserPlus />
            <span>
              Registro de <span>Novo Aluno</span>
            </span>
          </figure>
          <button onClick={() => handleModal()}>X</button>
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
                options={selectOptions}
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
                label="Entrada"
                name="entryTime"
                register={register}
                error={errors?.entryTime}
              />
              <Input
                type="time"
                label="Saída"
                name="departureTime"
                register={register}
                error={errors?.departureTime}
              />
            </div>
          </div>
          <div className="flex">
            <Button>Confirmar</Button>
          </div>
        </form>
      </Container>
    </Modal>
  );
}

export default Register;
