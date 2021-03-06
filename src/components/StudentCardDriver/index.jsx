import {
  TopContainer,
  About,
  CardInput,
  Container,
  BottomContainer,
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
import { getTime } from "../../utils";

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

  const { updateTodayTrip } = useContext(StudentContext);

  const { hour, date } = getTime();

  const todayTrip = student.tripsList.find((trip) => trip.date === date) || {};
  const [isEntryChecked, setIsEntryChecked] = useState(!!todayTrip.entryTime);
  const [isDepartureChecked, setIsDepartureChecked] = useState(
    !!todayTrip.departureTime
  );

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  const handleEntryCheckBox = () => {
    const updatedValue = isEntryChecked ? null : { entryTime: hour };

    const todayTrip =
      student.tripsList.find((trip) => trip.date === date) || {};

    if (!updatedValue) delete todayTrip.entryTime;

    const updatedTrip = updatedValue
      ? { ...todayTrip, ...updatedValue, date }
      : { ...todayTrip, date };

    updateTodayTrip(student.id, updatedTrip, date);
  };

  const handleDepartureCheckBox = () => {
    const updatedValue = isDepartureChecked ? null : { departureTime: hour };

    if (!updatedValue) delete todayTrip.departureTime;

    const updatedTrip = updatedValue
      ? { ...todayTrip, ...updatedValue, date }
      : { ...todayTrip, date };

    updateTodayTrip(student.id, updatedTrip, date);
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
            <span>Entrada: {todayTrip.entryTime || student.entryTime}</span>
            <Checkbox
              sx={{
                color: "#FA8223",
                "&.Mui-checked": {
                  color: "#FA8223",
                },
              }}
              checked={isEntryChecked}
              onClick={() => {
                setIsEntryChecked(!isEntryChecked);
                handleEntryCheckBox();
              }}
            />
          </div>
          <div>
            <span>
              Sa??da: {todayTrip.departureTime || student.departureTime}
            </span>
            <Checkbox
              sx={{
                color: "#FA8223",
                "&.Mui-checked": {
                  color: "#FA8223",
                },
              }}
              checked={isDepartureChecked}
              onClick={() => {
                setIsDepartureChecked(!isDepartureChecked);
                handleDepartureCheckBox();
              }}
            />
          </div>
        </TimesContainer>
      </TopContainer>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <BottomContainer>
          <About>
            <h3>Respons??vel: {student.parentName}</h3>
            <h3>Endere??o: {student.address}</h3>
            <h3>Escola: {student.school}</h3>
          </About>
          <CardInput>
            <StudentMessages
              messages={student.messages}
              studentId={student.id}
            />
          </CardInput>
        </BottomContainer>
      </Collapse>
    </Container>
  );
};

export default StudentCard;
