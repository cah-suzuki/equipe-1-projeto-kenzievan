import { Switch, Route } from "react-router-dom";
import DriverDashboard from "../pages/driverDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ParentDashboard from "../pages/parentDashboard";
import Register from "../pages/register";
import SignUp from "../pages/SignUp";

const Routes = () => {
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
      <Route path="/parent/:name_of_parent">
        <ParentDashboard />
      </Route>
      <Route path="/driver/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
