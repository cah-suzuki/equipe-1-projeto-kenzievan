import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
// import {userContext} from '../User'
import Api from "../../services/api";

export const MessagesContext = createContext([]);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  //   Descomentar linha abaixo + import quando o userProvider estiver pronto
  //   const {user.id, token} = useContext(userProvider)

  // A pagar proximas 2 linhas quando user Provider estiver pronto
  const userId = 2;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb2xpc2thOThAZ21haWwuY29tIiwiaWF0IjoxNjQ3OTAzMTA2LCJleHAiOjE2NDc5MDY3MDYsInN1YiI6IjIifQ.yBtwPc7NIzFrsEQsaI6D_eyidfVPYEQyOqdoHWmRlm0";

  useEffect(() => {
    Api.get("/public_messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setMessages(res.data))
      .catch((error) => console.log(error));
  }, []);

  const postMessage = (message, clearInput) => {
    const data = {
      message,
      driverId: userId,
    };

    Api.post(`/public_messages`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setMessages([...messages, data]);
        clearInput();
      })
      .catch((error) => toast.error("Ocorreu um erro ao enviar a mensagem!"));
  };

  return (
    <MessagesContext.Provider value={{ messages, postMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
