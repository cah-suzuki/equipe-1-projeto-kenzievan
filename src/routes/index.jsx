import { Switch, Route } from "react-router-dom";
import DriverDashboard from "../pages/driverDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ParentDashboard from "../pages/parentDashboard";
import SignUp from "../pages/SignUp";
<<<<<<< HEAD
import StudentCard from "../components/studentCard";
import { useContext } from "react";
import { StudentContext } from "../providers/Students";
=======
import StudentMessagesDriver from "../components/StudentMessagesDriver";
import { useContext } from "react";
import { StudentContext } from "../providers/Students";
import { UserContext } from "../providers/User";
>>>>>>> feature/student-messages-driver

const Routes = () => {
  const { students } = useContext(StudentContext);
  console.log(students);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/driver">
        <DriverDashboard />
      </Route>
      <Route path="/dashboard">
        {students.length > 0 &&
          students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
      </Route>
    </Switch>
  );
};

export default Routes;
