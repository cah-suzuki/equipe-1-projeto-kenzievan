import { Switch, Route } from "react-router-dom";
import DriverDashboard from "../components/DriverDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
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
        <DriverDashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
