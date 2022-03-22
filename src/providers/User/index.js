import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import Api from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieVan:user")) || {}
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@KenzieVan:token")) || {}
  );

  const history = useHistory();

  const login = (data) => {
    Api.post("/login", data)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.accessToken);
        localStorage.setItem(
          "@KenzieVan:user",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem(
          "@KenzieVan:token",
          JSON.stringify(response.data.accessToken)
        );
        history.push(`/dashboard`);
        toast.success("Login efetuado com sucesso");
      })
      .catch(() => toast.error("Algo deu errado, tente novamente"));
  };

  const logout = () => {
    setUser({});
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
