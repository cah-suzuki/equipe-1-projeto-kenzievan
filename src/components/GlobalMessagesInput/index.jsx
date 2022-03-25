import { Container, MessageForm } from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { MessagesContext } from "../../providers/Messages";
import { UserContext } from "../../providers/User";
import { useState } from "react";

function GlobalMessagesInput() {
  const [inputValue, setInputValue] = useState();

  const { sendGlobalMessage } = useContext(MessagesContext);
  const { user } = useContext(UserContext);

  const getTime = () => {
    const now = new Date();
    
    const date = now.toLocaleDateString('pt-BR');
    const hour = now.toTimeString().substring(0, 5);
  
    return { date, hour };
  };
  
  const clearInput = () => setInputValue("");

  const handleClick = () => {
    const { date, hour } = getTime();

    const newMessage = {
      message: inputValue,
      date,
      hour,
      driverId: user.id,
    };

    sendGlobalMessage(newMessage, clearInput);
  };

  return (
    <Container>
      <h1>Enviar mensagem coletiva</h1>
      <MessageForm>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleClick()}>
          <IoIosArrowForward />
        </button>
      </MessageForm>
      <button onClick={(e) => setInputValue(e.target.innerText)}>
        Atrasado 5 minutos!
      </button>
      <button onClick={(e) => setInputValue(e.target.innerText)}>
        Estou chegando!
      </button>
    </Container>
  );
}

export default GlobalMessagesInput;
