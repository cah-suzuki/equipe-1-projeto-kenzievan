import { useContext } from "react";
import { MessagesContext } from "../../providers/Messages/index.js";
import { StudentContext } from "../../providers/Students/index.js";
import {
  Container,
  MessageContainer,
  MessageCard,
  EmptyMessageContainer,
} from "./styles.js";

function GlobalMessagesList() {
  const { messages } = useContext(MessagesContext);
  const { students } = useContext(StudentContext);

  const filterMessagesByDriverId = (messages) => {
    const allDriversId = students.map((student) => String(student.driverId));

    return messages.filter((message) =>
      allDriversId.includes(String(message.driverId))
    );
  };

  const reversedMessages = [...messages].reverse();

  const messagesToShow = filterMessagesByDriverId(reversedMessages);

  return (
    <Container>
      <h3>Histórico de mensagens</h3>
      {messages.length > 0 ? (
        <MessageContainer>
          {messagesToShow.map((item, index) => (
            <MessageCard key={index}>
              <div>
                <h3>{item.date}</h3>
                <h3>{item.hour}</h3>
              </div>
              <p>{item.message}</p>
            </MessageCard>
          ))}
        </MessageContainer>
      ) : (
        <EmptyMessageContainer>
          <h3>Você ainda não possui mensagens</h3>
        </EmptyMessageContainer>
      )}
    </Container>
  );
}

export default GlobalMessagesList;
