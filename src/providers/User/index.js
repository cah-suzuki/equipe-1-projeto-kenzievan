import { createContext, useEffect, useState } from "react";
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
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (token && Object.entries(user).length > 0) {
      Api.get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => setIsAuth(true))
        .catch(() => {
          setIsAuth(false);
        });
    } else {
      setIsAuth(false);
    }
  }, []);

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
        setIsAuth(true);
        toast.success("Login efetuado com sucesso");
      })
      .catch(() => toast.error("Algo deu errado, tente novamente"));
  };

  const logout = () => {
    setUser({});
    setToken("");
    setIsAuth(false);
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ user, token, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
