import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../User";
import Api from "../../services/api";

export const MessagesContext = createContext([]);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const {
    user: { id },
    token,
    isAuth,
  } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) {
      Api.get("/public_messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => setMessages(res.data))
        .catch((error) => console.log(error));
    } else {
      setMessages([]);
    }
  }, [isAuth]);

  const postMessage = (message, clearInput) => {
    const data = {
      message,
      driverId: id,
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
