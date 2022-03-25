import {
  Container,
  HeaderContanier,
  GreetingContainer,
  DayContainer,
} from "./styles";
import NavBar from "../NavBar";
import { UserContext } from "../../providers/User";
import { useContext } from "react";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getTime } from "../../utils";

function Header() {
  const { user } = useContext(UserContext);
  const [isLocationOn, setIsLocationOn] = useState(false);
  const [timerId, setTimerId] = useState();
  const { date } = getTime();
  let geolocation;

  function sendLocationToApi({ coords }) {
    let newObj = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    axios
      .put("https://json-server-camila-s.herokuapp.com/coords/1", newObj)
      .then((res) => {});
  }

  const handleClick = () => {
    const newLocationOn = !isLocationOn;
    setIsLocationOn(newLocationOn);
    if (newLocationOn) {
      setTimerId(
        (geolocation = setInterval(() => {
          navigator.geolocation.getCurrentPosition(sendLocationToApi);
        }, 1000))
      );
    } else {
      clearInterval(timerId);
    }
  };

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <NavBar logoutButton />
      <HeaderContanier>
        <GreetingContainer>
          <p>Olá, </p>
          <p>{user.name}</p>
        </GreetingContainer>
        {user.role === "driver" ? (
          <Button onClick={handleClick}>
            {isLocationOn ? "Desativar Localização" : "Ativar Localização"}
          </Button>
        ) : (
          <Button onClick={() => handleNavigation("map")}>
            Localizar Motorista
          </Button>
        )}
        <DayContainer>Hoje é: {date} </DayContainer>
      </HeaderContanier>
    </Container>
  );
}

export default Header;
