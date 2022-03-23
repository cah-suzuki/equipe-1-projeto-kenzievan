import { Container, MessageCard, InputContainer } from "./styles";
import ButtonSmall from "../buttonSmall";
import { useContext, useState } from "react";
import { StudentContext } from "../../providers/Students";

const StudentMessagesDriver = ({ messages, studentId, name }) => {
  const [inputValue, setInputValue] = useState("");

  const { sendMessage } = useContext(StudentContext);

  const handleClick = () => {
    const { date, hour } = getTime();

    const newMessage = {
      message: inputValue,
      date,
      hour,
    };

    sendMessage(studentId, newMessage, clearInput);
  };

  const clearInput = () => setInputValue("");

  const getTime = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const date = `${day}/${month}/${year}`;
    const hour = `${hours}:${minutes}`;

    return { date, hour };
  };

  return (
    <Container>
      <section>
        {messages.map(({ message, date, hour }, index) => {
          return (
            <MessageCard key={index}>
              <div>
                <h3>{date}</h3>
                <h3>{hour}</h3>
              </div>
              <p>{message}</p>
            </MessageCard>
          );
        })}
      </section>
      <InputContainer>
        <input
          placeholder="Enviar mensagem"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonSmall onClick={() => handleClick()} />
      </InputContainer>
    </Container>
  );
};

export default StudentMessagesDriver;
