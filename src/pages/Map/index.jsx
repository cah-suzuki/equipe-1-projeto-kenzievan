import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import NavBar from "../../components/NavBar";
import Container from "./styles";

import { useState, useEffect, useContext } from "react";
import React from "react";
import Api from "../../services/api";
import { UserContext } from "../../providers/User";

const MapContainer = ({ google }) => {
  //trocar coordenadas por resposta da api get que o motorista mandou
  const [coords, setCoords] = useState();
  const { token } = useContext(UserContext);

  useEffect(() => {
    let geolocation = setInterval(() => {
      Api.get("/driverCoords/1", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        setCoords(res.data);
        console.log(res);
      });
    }, 5000);
  }, []);

  const displayMarkers = () => {
    if (!coords) {
      return <></>;
    }
    return (
      <Marker
        key={coords.id}
        id={coords.id}
        position={{
          lat: coords.lat,
          lng: coords.lng,
        }}
      />
    );
  };

  const mapStyles = {
    width: "80%",
    height: "100%",
    display: "flex",
    borderRadius: "10px",
    boxShadow: "0 0 1em #83F3FA",
  };

  const containerStyle = {
    width: "calc(100% - 11vw)",
    height: "70%",
    left: "calc(11vw)",
    bottom: "3vh",
  };

  return (
    <Container>
      <NavBar dashboard />
      <Map
        containerStyle={containerStyle}
        google={google}
        style={mapStyles}
        zoom={7}
        center={coords}
      >
        {displayMarkers()}
      </Map>
    </Container>
  );
};

export default GoogleApiWrapper(({ google }) => ({
  apiKey: "AIzaSyCDvcg4o01NibWTYaix3i0ecDAP2xP6WII",
}))(MapContainer);
