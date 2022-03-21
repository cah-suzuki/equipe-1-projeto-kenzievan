import { useState } from "react";
import { Contanier, DateFilter, ListItem } from "./styles";

function TripList() {
  const triplistExemple = [
    { date: "2022-03-01", entryTime: "06:45", leaveTime: "12:45" },
    { date: "2022-03-02", entryTime: "07:55", leaveTime: "11:35" },
    { date: "2022-03-03", entryTime: "08:35", leaveTime: "10:25" },
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
      <DateFilter
        type="date"
        onChange={(e) => dateFilter(e.target.value)}
        defaultValue={today}
      />
      <ul>
        {triplist.map((item, index) => (
          <ListItem key={index}>
            <span>
              <p>Hora de Entrada:</p> <p>{item.entryTime}</p>
            </span>
            <span>
              <p>Hora de sáida:</p> <p>{item.leaveTime}</p>
            </span>
            <p>{item.date.split("-").reverse().join("/")}</p>
          </ListItem>
        ))}
      </ul>
    </Contanier>
  );
}

export default TripList;
