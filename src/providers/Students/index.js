import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { UserContext } from "../User";

export const StudentContext = createContext({});

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const {
    token,
    user: { id },
    isAuth,
  } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) {
      Api.get("/students", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        console.log(students);
        const filteredList = filterListById(response.data);
        const sortedList = sortListAlphabetically(filteredList);
        setStudents(sortedList);
      });
    } else {
      setStudents([]);
    }
  }, [isAuth]);

  const filterListById = (list) => {
    const filteredList = list.filter((student) => {
      return (
        String(id) === String(student.parentId) ||
        String(id) === String(student.driverId)
      );
    });
    return filteredList;
  };

  const sortListAlphabetically = (list) => {
    const sortedList = list.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return sortedList;
  };

  const newStudent = (newStudent) => {
    Api.post("/students", newStudent, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        const filteredList = filterListById(response.data);
        const sortedList = sortListAlphabetically(filteredList);
        setStudents(sortedList);
      })
      .catch(() => toast.error("Não foi possível cadastrar o aluno"));
  };

  const deleteStudent = (id) => {
    Api.delete(`/students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        const filteredList = students.filter((student) => student.id !== id);
        setStudents(filteredList);
      })
      .catch((error) => console.log(error));
  };

  const updateTodayTrip = (studentId, updatedTrip, date) => {
    Api.get(`/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const allTrips = response.data.tripsList;

        const filteredTrips = allTrips.filter((trip) => trip.date !== date);

        const updatedTripsList = { tripsList: [...filteredTrips, updatedTrip] };

        Api.patch(`/students/${studentId}`, updatedTripsList, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          const filteredStudents = students.filter(
            (student) => student.id !== studentId
          );
          const updatedStudents = [...filteredStudents, response.data];

          setStudents(updatedStudents);
        });
      })
      .catch((error) => toast.error("Ocorreu um erro ao enviar a mensagem!"));
  };

  return (
    <StudentContext.Provider
      value={{ students, newStudent, deleteStudent, updateTodayTrip }}
    >
      {children}
    </StudentContext.Provider>
  );
};
