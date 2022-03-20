import GlobalStyle from "./styles/global";
import Routes from "../src/routes";
import Button from "./components/button";
import DriverDashboard from "./pages/driverDashboard";

function App() {
  return (
    <>
      <DriverDashboard />
      <GlobalStyle />
      {/* <Routes /> */}
    </>
  );
}

export default App;
