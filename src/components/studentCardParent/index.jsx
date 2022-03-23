import {
  OpenContainer,
  About,
  Container,
  Content,
  Name,
  BoxInput,
  CardInput,
} from "./styles";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import TripList from "../tripList";
import ButtonSmall from "../buttonSmall";
import { useForm } from "react-hook-form";
import StudentMessagesDriver from "../StudentMessagesDriver";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StudentCardParent = ({ student, studentID }) => {
  const [expanded, setExpanded] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <OpenContainer
        expand={expanded}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Name>
          <span>Aluno: {student.name}</span>
        </Name>
      </OpenContainer>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <FiChevronDown />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Content>
          <About>
            <p>Endereço: {student.address}</p>
            <p>Escola: {student.school}</p>

            <CardInput>
              <p>Mensagem para o motorista:</p>
              <StudentMessagesDriver
                messages={student.messages}
                studentId={student.id}
              />
            </CardInput>
          </About>

          <TripList></TripList>
        </Content>
      </Collapse>
    </Container>
  );
};

export default StudentCardParent;
