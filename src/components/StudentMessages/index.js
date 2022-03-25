import { Container, MessageCard, InputContainer } from "./styles";
import ButtonSmall from "../buttonSmall";
import { useContext, useState } from "react";
import { StudentContext } from "../../providers/Students";
import { UserContext } from "../../providers/User";
import { getTime } from "../../utils";

const StudentMessages = ({ messages, studentId }) => {
  const [inputValue, setInputValue] = useState("");

  const { sendMessage } = useContext(StudentContext);
  const { user } = useContext(UserContext);

  const handleClick = () => {
    const { date, hour } = getTime();

    if (inputValue.length > 0) {
      const newMessage = {
        message: inputValue,
        sender: user.name,
        date,
        hour,
      };
      sendMessage(studentId, newMessage, clearInput);
    }
  };

  const clearInput = () => setInputValue("");

  return (
    <Container>
      <section>
        {messages.map(({ message, sender, date, hour }, index) => {
          return (
            <MessageCard key={index}>
              <div>
                <h3>{sender?.split(" ")[0]}</h3>
                <div>
                  <span>{date}</span>
                  <span>{hour}</span>
                </div>
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
