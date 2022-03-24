import {
  OpenContainer,
  About,
  CardInput,
  Container,
  Content,
  Name,
  Times,
} from "./styles";
import {
  FiChevronDown,
} from "react-icons/fi";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useContext } from "react";
import { StudentContext } from "../../providers/Students";
import { Checkbox } from "@mui/material";
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

const getTime = () => {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  const date = `${day}/${month}/${year}`;
  const hour = now.toTimeString().substring(0, 5);

  return { date, hour };
};

const StudentCard = ({ student }) => {
  const [expanded, setExpanded] = useState(false);
  const [entryText, setEntryText] = useState("xx:xx");
  const [departureText, setDepartureText] = useState("xx:xx");

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  const { updateTodayTrip } = useContext(StudentContext);

  const handleEntryCheckBox = () => {
    const { hour } = getTime();
    const updatedValue = { entryTime: hour };
    entryText !== "xx:xx" ? setEntryText("xx:xx") : setEntryText(hour);
    entryText !== "xx:xx"
      ? sentTripToApi("xx:xx")
      : sentTripToApi(updatedValue);
  };

  const handleDepartureCheckBox = () => {
    const { hour } = getTime();
    const updatedValue = { departureTime: hour };
    departureText !== "xx:xx"
      ? setDepartureText("xx:xx")
      : setDepartureText(hour);
    departureText !== "xx:xx"
      ? sentTripToApi("xx:xx")
      : sentTripToApi(updatedValue);
  };

  const sentTripToApi = (updatedValue) => {
    const { date } = getTime();

    const todayTrip =
      student.tripsList.find((trip) => trip.date === date) || {};

    const updatedTrip = { ...todayTrip, ...updatedValue, date };
    updateTodayTrip(student.id, updatedTrip, date);
  };

  const Fechado = (e) => {
    setExpanded(true);
  };

  return (
    <Container>
      <OpenContainer expand={expanded} aria-expanded={expanded} aria-label="show more">
        <Name>
          <span>Aluno: {student.name}</span>
          <p>Responsável: {student.parentName}</p>
        </Name>
        <Times>
          <section>
            <div>
              <p>Entrada:</p>
              <span>{entryText}</span>
            </div>
            <Checkbox
              sx={{
                color: "#FA8223",
                "&.Mui-checked": {
                  color: "#FA8223",
                },
              }}
              onChange={() => handleEntryCheckBox()}
            />
          </section>

          <section>
            <div>
              <p>Saída:</p>
              <span>{departureText}</span>
            </div>
            <Checkbox
              sx={{
                color: "#FA8223",
                "&.Mui-checked": {
                  color: "#FA8223",
                },
              }}
              onChange={() => handleDepartureCheckBox()}
            />
          </section>
        </Times>
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
          </About>
          <CardInput onClick={(e) => Fechado(e)}>
            <p>Mensagem para o responsável:</p>
            <StudentMessagesDriver
              messages={student.messages}
              studentId={student.id}
            />
          </CardInput>
        </Content>
      </Collapse>
    </Container>
  );
};

export default StudentCard;
