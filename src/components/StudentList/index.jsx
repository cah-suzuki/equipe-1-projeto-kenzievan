// import StudentCard from "../StudentCard"

import React from "react";
import { Container } from "./style";
import Button from "../button";
import { useState, useContext } from "react";
import { StudentContext } from "../../providers/Students";
import StudentCardParent from "../studentCardParent";

const StudentList = ({ isDriver }) => {
  // const { students } = useContext(StudentContext);

  //teste abertura dos cards
  const [isOpen, setIsOpen] = useState(false);

  //teste se handleClick do novo cadastro,deve ser deletado apos teste
  const handleClick = () => {
    let counter = 0;
  };
  //teste de troca de true ou false para openCard
  //na verdade o state Global vai salvar isso
  //cada card ao ser criado recebe um handleClick parecido com esse abaixo
  //no componente card vai existir a renderização condicional para mostrar todos os dados ou so o nome
  const openCard = (isOpen) => setIsOpen(!isOpen);

  const list = [
    {
      name: "name",
      school: "school",
      schoolAddress: "schoolAddress",
      address: "address",
      parentName: "parentName",
      parentId: "parentId",
      driverId: "driverId",
      entryTime: "entryTime",
      leaveTime: "leaveTime",
      tripsList: [],
      messages: [],
      id: 3,
    },
    {
      name: "name",
      school: "school",
      schoolAddress: "schoolAddress",
      address: "address",
      parentName: "parentName",
      parentId: "parentId",
      driverId: "driverId",
      entryTime: "entryTime",
      leaveTime: "leaveTime",
      tripsList: [],
      messages: [],
      id: 3,
    },
    {
      name: "name",
      school: "school",
      schoolAddress: "schoolAddress",
      address: "address",
      parentName: "parentName",
      parentId: "parentId",
      driverId: "driverId",
      entryTime: "entryTime",
      leaveTime: "leaveTime",
      tripsList: [],
      messages: [],
      id: 3,
    },
  ];


  return (
    <Container>
      <header>
        <h2>Lista de alunos cadastrados</h2>
        {isDriver && <Button onClick={handleClick}>Novo Cadastro</Button>}
      </header>
      <ul>
        {list.map((item) => (
          <StudentCardParent student={item} />
        ))}
      </ul>
    </Container>
  );
};

export default StudentList;
