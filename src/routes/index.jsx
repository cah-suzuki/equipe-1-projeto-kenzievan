import { Switch, Route } from "react-router-dom";
import DriverDashboard from "../pages/driverDashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import ParentDashboard from "../pages/parentDashboard";
import Register from "../pages/register";
import SignUp from "../pages/signUp";
import useContext from 'react;'


const Routes = () => {

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/dashboard'>

      </Route>
    </Switch>
  )
};

export default Routes;
