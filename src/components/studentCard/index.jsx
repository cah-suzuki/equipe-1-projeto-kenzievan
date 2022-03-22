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

const StudentCard = ({ student }) => {
  const { register, handleSubmit, reset } = useForm();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const entryTime = () => {
    const now = new Date();
    console.log(now.toLocaleString());
  };

  const departureTime = () => {
    const now = new Date();
    console.log(now.toLocaleString());
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
              <span>xx:xx</span>
            </div>
            <ButtonSmall onClick={() => entryTime()}>
              <FiCheck />
            </ButtonSmall>
          </section>

          <section>
            <div>
              <p>Saída:</p>
              <span>xx:xx</span>
            </div>
            <ButtonSmall onClick={() => departureTime()}>
              <FiCheck />
            </ButtonSmall>
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
