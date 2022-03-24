import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
// import Dashboard from '../components/Dashboard';

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
      <Route exact path='/dashboard'>
        {/* <Dashboard /> */}
      </Route>
    </Switch>
  );
};

export default Routes;