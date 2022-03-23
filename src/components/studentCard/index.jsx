import {
  Aberto,
  About,
  BoxInput,
  CardInput,
  Container,
  Content,
  Times,
} from "./styles";
import { FiCheck, FiChevronRight } from "react-icons/fi";
import ButtonSmall from "../buttonSmall";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useContext } from "react";
import { StudentContext } from "../../providers/Students";

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
  const { register, handleSubmit, reset } = useForm();
  const [expanded, setExpanded] = useState(false);
  const [entryText, setEntryText] = useState("xx:xx");
  const [departureText, setDepartureText] = useState("xx:xx");

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const { updateTodayTrip } = useContext(StudentContext);

  const handleEntryCheckBox = () => {
    const { hour } = getTime();

    const updatedValue = { entryTime: hour };

    setEntryText(hour);
    sentTripToApi(updatedValue);
  };

  const handleDepartureCheckBox = () => {
    const { hour } = getTime();

    const updatedValue = { departureTime: hour };

    setDepartureText(hour);
    sentTripToApi(updatedValue);
  };

  const sentTripToApi = (updatedValue) => {
    const { date } = getTime();

    const todayTrip =
      student.tripsList.find((trip) => trip.date === date) || {};

    const updatedTrip = { ...todayTrip, ...updatedValue, date };
    updateTodayTrip(student.id, updatedTrip, date);
  };

  return (
    <Container onClick={(e) => handleExpandClick(e)}>
      <Aberto expand={expanded} aria-expanded={expanded} aria-label="show more">
        <section>
          <span>{student.name}</span>
          <p>{student.parentName}</p>
        </section>
        <Times>
          <section>
            <div>
              <p>Entrada:</p>
              <span>{entryText}</span>
            </div>
            <ButtonSmall icon={FiCheck} onClick={() => handleEntryCheckBox()} />
          </section>

          <section>
            <div>
              <p>Saída:</p>
              <span>{departureText}</span>
            </div>
            <ButtonSmall
              icon={FiCheck}
              onClick={() => handleDepartureCheckBox()}
            />
          </section>
        </Times>
      </Aberto>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Content>
          <About>
            <p>{student.address}</p>
            <p>{student.school}</p>
          </About>
          <CardInput>
            <p>Mensagem para o responsável:</p>
            <BoxInput>
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  {...register("message")}
                  placeholder="Digite sua mensagem"
                />
                <ButtonSmall type="sumbit">
                  <FiChevronRight />
                </ButtonSmall>
              </form>
            </BoxInput>
          </CardInput>
        </Content>
      </Collapse>
    </Container>
  );
};

export default StudentCard;
