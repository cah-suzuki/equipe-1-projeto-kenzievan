import { Container, MessagesContainer } from "./styles";

import Header from "../Header";
import GlobalMessagesList from "../GlobalMessagesList";
import GlobalMessagesInput from "../GlobalMessagesInput";
import StudentList from "../StudentList";

import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

function Dashboard() {
  const {
    user: { role },
    isAuth,
  } = useContext(UserContext);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  const isDriver = role === "driver";

  return (
    <>
      <Header />
      <Container>
        <MessagesContainer>
          <GlobalMessagesList />
          {isDriver && <GlobalMessagesInput />}
        </MessagesContainer>
        <StudentList isDriver={isDriver} />
      </Container>
    </>
  );
}

export default Dashboard;
