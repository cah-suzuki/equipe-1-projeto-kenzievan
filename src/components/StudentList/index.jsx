// import StudentCard from "../StudentCard"
//useContext vai ser importado aqui assim como o provider
//para fazer registo de aluno

import React from "react";
import { Container } from "./style";
import Button from "../button";
import { useState } from "react";

import StudentCard from "../studentCard"

////
///Para testar comentei todo o arquivo routes e as chamadas
///de routes e globalstyle do app.js,o estilo precisa arrumar com a tela pronta
////

const StudentList = ({ isDriver }) => {
  //declaração do método context para registro de aluno
  // EX: const {registerStudent} = useContext(StudentContext)
  // esse registerStudent vai sei passado então como onClick do botão

  //teste abertura dos cards
  const [isOpen, setIsOpen] = useState(false);

  //teste se handleClick do novo cadastro,deve ser deletado apos teste
  const handleClick = () => {
    let counter = 0;
    console.log(counter);
  };
  //teste de troca de true ou false para openCard
  //na verdade o state Global vai salvar isso
  //cada card ao ser criado recebe um handleClick parecido com esse abaixo
  //no componente card vai existir a renderização condicional para mostrar todos os dados ou so o nome
  const openCard = (isOpen) => setIsOpen(!isOpen);

  console.log(isOpen);
  //lista de teste,deve ser deletada apos teste
  //a lista oficial também vai ser recebida por context assim como o registerStudent
  let students = [{
    "name": "asdfasd",
    "school": "asdfasdf",
    "schoolAddress": "schoolAddress",
    "address": "asdfasdf",
    "parentName": "asdfasdf",
    "parentId": "parentId",
    "driverId": "driverId",
    "entryTime": "entryTime",
    "leaveTime": "leaveTime",
    "tripsList": [],
    "messages": [],
    "id": 1
  }, {
    "name": "fghjghjk",
    "school": "ghjkghjk",
    "schoolAddress": "schoolAddress",
    "address": "ghjkghjk",
    "parentName": "ghjkghjk",
    "parentId": "parentId",
    "driverId": "driverId",
    "entryTime": "entryTime",
    "leaveTime": "leaveTime",
    "tripsList": [],
    "messages": [],
    "id": 2
  }, {
    "name": "qwerqwer",
    "school": "qwerqwer",
    "schoolAddress": "schoolAddress",
    "address": "qwerqwer",
    "parentName": "qwerqwer",
    "parentId": "parentId",
    "driverId": "driverId",
    "entryTime": "entryTime",
    "leaveTime": "leaveTime",
    "tripsList": [],
    "messages": [],
    "id": 3
  }];

  return (
    <Container>
      <header>
        <h2>Lista de alunos cadastrados</h2>
        {isDriver && <Button onClick={handleClick}>Novo Cadastro</Button>}
      </header>
      <ul>
        {React.Children.toArray(
          students.map((student) => (
            <StudentCard student={student}/>
          ))
        )}
      </ul>
    </Container>
  );
};

export default StudentList;
