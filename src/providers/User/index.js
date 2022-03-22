import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import Api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieVan:user")) || {}
  );

  const history = useHistory();

  const login = (data) => {
    Api.post("/login", data)
      .then((response) => {
        setUser(response);
        localStorage.setItem("@KenzieVan:user", JSON.stringify(user));
        history.push(`/dashboard`);
        toast.success("Login efetuado com sucesso");
      })
      .catch((err) => toast.error("Algo deu errado, tente novamente"));
  };

  const logout = () => {
    setUser({});
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
