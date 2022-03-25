import { Container, MessageCard, InputContainer } from "./styles";
import ButtonSmall from "../buttonSmall";
import { useContext, useState } from "react";
import { StudentContext } from "../../providers/Students";

const StudentMessages = ({ messages, studentId }) => {
  const [inputValue, setInputValue] = useState("");

  const { sendMessage } = useContext(StudentContext);

  const handleClick = () => {
    const { date, hour } = getTime();

    if (inputValue.length > 0) {
      const newMessage = {
        message: inputValue,
        date,
        hour,
      };
      sendMessage(studentId, newMessage, clearInput);
    }
  };

  const clearInput = () => setInputValue("");

  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }  

  const getTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const hour = now.toTimeString().substring(0, 5);

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

export default StudentMessages;
