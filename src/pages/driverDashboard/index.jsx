import { useState } from "react";
import Register from "../../components/Register";
import Button from "../../components/button";

function DriverDashboard() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const handleRegister = () => {
    setIsRegisterActive(true);
  };
  return (
    <>
      <h1>DRIVER DASHBOARD PAGE</h1>;
      <Button onClick={handleRegister}>Novo Cadastro</Button>
      <Register
        isRegisterActive={isRegisterActive}
        setIsRegisterActive={setIsRegisterActive}
      />
    </>
  );
}

export default DriverDashboard;
