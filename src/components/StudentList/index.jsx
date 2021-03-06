import React from "react";
import { Container } from "./style";
import Button from "../Button";
import StudentCardDriver from "../StudentCardDriver";
import StudentCardParent from "../StudentCardParent";
import Register from "../Register";
import { useState, useContext } from "react";
import { StudentContext } from "../../providers/Students";

const StudentList = ({ isDriver }) => {
  const { students } = useContext(StudentContext);

  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleModal = () => {
    setIsRegisterActive(!isRegisterActive);
  };

  return (
    <Container>
      <header>
        <h2>Lista de alunos cadastrados</h2>
        {isDriver && (
          <Button onClick={() => handleModal()}>Novo Cadastro</Button>
        )}
        {isRegisterActive && <Register handleModal={handleModal}></Register>}
      </header>
      <ul>
        {React.Children.toArray(
          students.map((student) => {
            return isDriver ? (
              <StudentCardDriver key={student.id} student={student} />
            ) : (
              <StudentCardParent key={student.id} student={student} />
            );
          })
        )}
      </ul>
    </Container>
  );
};

export default StudentList;
