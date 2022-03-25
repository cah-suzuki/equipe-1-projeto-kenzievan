import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../User";
import Api from "../../services/api";
import { filterListById } from "../../utils";

export const MessagesContext = createContext([]);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const { user, token, isAuth } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) {
      Api.get("/public_messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      setMessages([]);
    }
  }, [isAuth]);

  const sendGlobalMessage = (newMessage, clearInput) => {
    Api.post(`/public_messages`, newMessage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const updatedMessages = [...messages, response.data];
        setMessages(updatedMessages);
        clearInput();
      })
      .catch((error) => toast.error("Ocorreu um erro ao enviar a mensagem!"));
  };

  return (
    <MessagesContext.Provider value={{ messages, sendGlobalMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
