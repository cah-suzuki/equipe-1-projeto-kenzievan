import { Container, MessageForm } from "./styles";
import { IoIosArrowForward } from "react-icons/io";

function GroupMessages() {
  const handleSendMessage = (value) => {
    console.log(value);
    //axios.post(###,{value})
  };
  const handleDefaulMessage = (e, value) => {
    e.target.parentElement.children[1].message.value = value;
  };
  return (
    <Container>
      <h1>Enviar mensagem coletiva</h1>
      <MessageForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(e.target.message.value);
        }}
      >
        <textarea name="message" />
        <button type="submit">
          <IoIosArrowForward />
        </button>
      </MessageForm>
      <button
        onClick={(e) => {
          handleDefaulMessage(e, "Atrasado 5 minutos!");
        }}
      >
        Mensagem pré definida 1
      </button>
      <button
        onClick={(e) => {
          handleDefaulMessage(e, "Estou chegando!");
        }}
      >
        Mensagem pré definida 2
      </button>
    </Container>
  );
}

export default GroupMessages;
