import { Container } from "./styles";
import Button from "../button";
import { useHistory } from "react-router-dom";
import React from "react";
import Lottie from "react-lottie";
import schoolBus from "../../assets/lotties/school-bus.json";
import cloud from "../../assets/lotties/lottie2.json";
import clouds from "../../assets/lotties/lottie3.json";

const NavBar = ({ register, login, home, logout }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleNavigation("/");
  };

  const defaultOptionsBus = {
    loop: true,
    autoplay: true,
    animationData: schoolBus,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsCloud = {
    loop: true,
    autoplay: true,
    animationData: cloud,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsClouds = {
    loop: true,
    autoplay: true,
    animationData: clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div className="clouds">
        <div className="one">
          <Lottie resizeMode="contain" options={defaultOptionsClouds} />
        </div>
        <div className="two">
          <Lottie resizeMode="contain" options={defaultOptionsClouds} />
        </div>
      </div>

      <span>
        <h2>KenzieVan</h2>
        <div className="lottie-bus">
          <Lottie resizeMode="contain" options={defaultOptionsBus} />
        </div>
      </span>

      <nav>
        <div className="lottie">
          <Lottie resizeMode="contain" options={defaultOptionsCloud} />
        </div>
        {login && (
          <Button onClick={() => handleNavigation("login")}>Entrar</Button>
        )}
        {register && (
          <Button onClick={() => handleNavigation("signup")}>
            Cadastre-se
          </Button>
        )}
        {home && (
          <Button className="btn-one" onClick={() => handleNavigation("/")}>
            Voltar
          </Button>
        )}
        {logout && (
          <Button className="btn-two" onClick={() => handleLogout()}>
            Sair
          </Button>
        )}
      </nav>
    </Container>
  );
};

export default NavBar;
