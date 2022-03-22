import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import { useHistory } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@KenzieVan:user')) || {});

    const history = useHistory();

    const login = (object) => {

        axios.post('https://kenzievan-server.herokuapp.com/login', object)
            .then(response => {
                setUser(response.data)
                localStorage.setItem('@KenzieVan:user', JSON.stringify(user));
                toast.success('Login efetuado com sucesso');
                history.push(`/${object.role}`);
            })
            .catch(err => toast.error('Algo deu errado, tente novamente'))
    };

    const logout = () => {
        setUser({});
        localStorage.clear();
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};