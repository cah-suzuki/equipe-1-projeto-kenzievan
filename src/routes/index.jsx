import { Switch, Route } from "react-router-dom";
import DriverDashboard from "../pages/driverDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ParentDashboard from "../pages/parentDashboard";
import SignUp from "../pages/SignUp";
import StudentCard from "../components/studentCard";
import { useContext } from "react";
import { StudentContext } from "../providers/Students";

const Routes = () => {
  const { students } = useContext(StudentContext);
  console.log(students);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
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
