import { useState } from "react";
import { Contanier, DateContainer, MessagesContainer } from "./styles";

function TripList({ tripsList }) {
  const [tripsToShow, setTripsToShow] = useState(tripsList);

  const selectTripByDay = (selectedDate) => {
    const selectedTrip = tripsList.find((trip) => {
      return (
        trip.date ===
        selectedDate
          .split("-")
          .reverse()
          .map((e) => Number(e))
          .join("/")
      );
    });
    selectedTrip ? setTripsToShow([selectedTrip]) : setTripsToShow(tripsList);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Contanier>
      <DateContainer>
        <h4>Lista de Viagens</h4>
        <input
          type="date"
          onChange={(e) => selectTripByDay(e.target.value)}
          defaultValue={today}
        />
      </DateContainer>
      <MessagesContainer>
        {tripsToShow.map((trip, index) => (
          <li key={index}>
            <h3>{trip.date}</h3>
            <div>
              <span>Entrada</span>
              <span>{trip.entryTime}</span>
            </div>
            <div>
              <span>Saída</span>
              <span>{trip.departureTime}</span>
            </div>
          </li>
        ))}
      </MessagesContainer>
    </Contanier>
  );
}

export default TripList;
