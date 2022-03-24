import {
  TopContainer,
  About,
  MessagesContainer,
  Container,
  BottomContainer,
  TripsContainer,
  TimesContainer,
} from "./styles";

import { useState } from "react";
import { useContext } from "react";

import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { AiOutlineCaretDown } from "react-icons/ai";

import { StudentContext } from "../../providers/Students";
import StudentMessages from "../StudentMessages";
import TripList from "../TripList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton size="small" {...other} />;
})(({ theme, expand }) => ({
  position: "absolute",
  bottom: "-22px",
  color: "var(--color-primary-100)",
  boxSizing: "border-box",
  border: "1px solid var(--color-primary-100)",
  borderRadius: expand ? "50% 50% 0 0" : "0 0 50% 50%",
  padding: "2px 3px 0",
  cursor: "pointer",
  left: "calc(50% - 14px)",
  "&:hover": {
    color: "var(--white)",
    background: "var(--color-primary-100)",
  },
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: 0,
  }),
}));

const StudentCard = ({ student }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  return (
    <Container isExpanded={expanded}>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <AiOutlineCaretDown />
      </ExpandMore>
      <TopContainer
        isExpanded={expanded}
        expand={expanded}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <h3>{student.name}</h3>
        <TimesContainer>
          <div>
            <span>Entrada: {student.entryTime}</span>
          </div>
          <div>
            <span>Saída: {student.departureTime}</span>
          </div>
        </TimesContainer>
      </TopContainer>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <BottomContainer>
          <About>
            <h4>Responsável: {student.parentName}</h4>
            <h4>Endereço: {student.address}</h4>
            <h4>Escola: {student.school}</h4>
          </About>
          <TripsContainer>
            <TripList tripsList={student.tripsList} />
          </TripsContainer>
          <MessagesContainer>
            <StudentMessages
              messages={student.messages}
              studentId={student.id}
            />
          </MessagesContainer>
        </BottomContainer>
      </Collapse>
    </Container>
  );
};

export default StudentCard;
