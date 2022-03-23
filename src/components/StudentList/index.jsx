import React from "react";
import { Container } from "./style";
import Button from "../button";
import studentCard from "../studentCard";
import Register from "../Register";
import { useState, useContext } from "react";
import { StudentContext } from "../../providers/Students";

const StudentList = ({ isDriver }) => {
  const { students } = useContext(StudentContext);

  //teste abertura dos cards
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  //teste se handleClick do novo cadastro,deve ser deletado apos teste
  const handleClick = () => {
    setIsRegisterActive(true);
    let counter = 0;
    console.log(counter);
  };
  //teste de troca de true ou false para openCard
  //na verdade o state Global vai salvar isso
  //cada card ao ser criado recebe um handleClick parecido com esse abaixo
  //no componente card vai existir a renderização condicional para mostrar todos os dados ou so o nome
  const openCard = (isOpen) => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <Container>
      <header>
        <h2>Lista de alunos cadastrados</h2>
        {isDriver && <Button onClick={handleClick}>Novo Cadastro</Button>}
        {isRegisterActive ? (
          <Register
            isRegisterActive={isRegisterActive}
            setIsRegisterActive={setIsRegisterActive}
          ></Register>
        ) : null}
      </header>
      <ul>
        {React.Children.toArray(
          students.map(({ student }) => (
            //trocar li por studentCard com dados necessarios
            //name,parent,address,school,entryTime,departureTime
            <Button onClick={() => openCard(isOpen)} className="buttonList">
              <studentCard key={student.id} student={student} />
            </Button>
          ))
        )}
      </ul>
    </Container>
  );
};

export default StudentList;
