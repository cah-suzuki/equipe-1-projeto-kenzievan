import {
  Container,
  MessageContainer,
  MessageCard,
  EmptyMessageContainer,
} from "./styles.js";

function MessagesList({list}) {

  //----------Essa função deve ser colocada na página que vai criar a lista. Ela coleta a hora e a data e envia corretamente para o messageCard-----------
  // function addZero(i) {
  //   if (i < 10) {
  //     i = "0" + i;
  //   }
  //   return i;
  // }

  // const registerDate = () => {
  //   const now = new Date();

  //   const dia = String(now.getDate()).padStart(2, "0");
  //   const mes = String(now.getMonth() + 1).padStart(2, "0");
  //   const ano = now.getFullYear();
  //   const dataAtual = dia + "/" + mes + "/" + ano;
  //   const time = now.valueOf();

  //   const d = new Date();
  //   const h = addZero(d.getHours());
  //   const m = addZero(d.getMinutes());
  //   const hora = h + ":" + m;


  const now = new Date();
  const currentTime = now.valueOf();

  // OBS: Remover a lista padrão dos props quando tivermos contato com a api!
  return (
    <Container>
      <h3>Histórico de mensagens</h3>
      {list.length > 0 ? (
        <MessageContainer>
          {list.map((item, index) => (
            <MessageCard
              isRecent={item.time + 5 * 3600000 >= currentTime ? false : true}
              key={index}
            >
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
