import { useState } from "react";
import { Contanier, DateContainer, MessagesContainer } from "./styles";

function TripList({ tripsList }) {
  const triplistExemple = [
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
    { date: "2022-03-01", entryTime: "06:45", departureTime: "12:45" },
  ];
  const [triplist, setTriplist] = useState(triplistExemple);
  const today = new Date().toISOString().split("T")[0];
  const dateFilter = (dateValue) => {
    const newTripList = triplistExemple.filter((item) => {
      return item.date === dateValue;
    });
    if (newTripList.length <= 0) {
      setTriplist(triplistExemple);
    } else {
      setTriplist(newTripList);
    }
  };
  return (
    <Contanier>
      <DateContainer>
        <h4>Lista de Viagens</h4>
        <input
          type="date"
          onChange={(e) => dateFilter(e.target.value)}
          defaultValue={today}
        />
      </DateContainer>
      <MessagesContainer>
        {triplist.map((item, index) => (
          <li key={index}>
            <h3>{item.date.split("-").reverse().join("/")}</h3>
            <div>
              <span>Entrada</span>
              <span>{item.entryTime}</span>
            </div>
            <div>
              <span>Saída</span>
              <span>{item.departureTime}</span>
            </div>
          </li>
        ))}
      </MessagesContainer>
    </Contanier>
  );
}

export default TripList;
