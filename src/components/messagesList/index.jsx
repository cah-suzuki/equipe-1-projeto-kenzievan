import {
  Container,
  MessageContainer,
  MessageCard,
  EmptyMessageContainer,
} from "./styles.js";

function MessagesList({
  list = [
    {
      date: "dd/mm/aaaa",
      hour: "00:00",
      message: "Lorem ipsum dolor sit amet.",
    },
    {
      date: "dd/mm/aaaa",
      hour: "00:00",
      message: "Lorem ipsum dolor sit amet.",
    },
  ],
}) {
  // OBS: Remover a lista padrão dos props quando tivermos contato com a api!
  return (
    <Container>
      <h3>Histórico de mensagens</h3>
      {list.length > 0 ? (
        <MessageContainer>
          {list.map((item, index) => (
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

export default MessagesList;
