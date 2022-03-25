import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { UserContext } from "../User";

import { filterListById, sortListAlphabetically } from "../../utils";

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
        const filteredList = filterListById(response.data, id);
        const sortedList = sortListAlphabetically(filteredList, id);
        setStudents(sortedList);
      });
    } else {
      setStudents([]);
    }
  }, [isAuth]);

  const newStudent = (newStudent) => {
    Api.post("/students", newStudent, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        const studentList = [...students, response.data];
        const filteredList = filterListById(studentList, id);
        const sortedList = sortListAlphabetically(filteredList, id);
        setStudents(sortedList);
        toast.success("Aluno cadastrado com sucesso");
      })
      .catch((error) => {
        toast.error("Não foi possível cadastrar o aluno");
      });
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

          const sortedList = sortListAlphabetically(updatedStudents);

          setStudents(sortedList);
        });
      })
      .catch((error) => toast.error("Ocorreu um erro ao enviar a mensagem!"));
  };

  const sendMessage = (studentId, newMessage, clearInput) => {
    Api.get(`/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const allMessages = response.data.messages;
        const updatedMessages = {
          messages: [newMessage, ...allMessages],
        };

        Api.patch(`/students/${studentId}`, updatedMessages, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          const filteredStudents = students.filter(
            (student) => student.id !== studentId
          );
          const updatedStudents = [...filteredStudents, response.data];

          const sortedList = sortListAlphabetically(updatedStudents);

          setStudents(sortedList);
          clearInput();
        });
      })
      .catch((error) => toast.error("Ocorreu um erro ao enviar a mensagem!"));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        newStudent,
        deleteStudent,
        updateTodayTrip,
        sendMessage,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
