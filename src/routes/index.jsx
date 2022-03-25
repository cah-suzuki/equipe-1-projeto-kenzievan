import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MapContainer from "../pages/MapContainer";

const Routes = () => {
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
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/map">
        <MapContainer />
      </Route>
    </Switch>
  );
};

export default Routes;
