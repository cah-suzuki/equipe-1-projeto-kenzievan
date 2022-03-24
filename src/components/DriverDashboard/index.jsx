import { Container, MessagesContainer } from "./styles";

import GlobalMessagesList from "../GlobalMessagesList";
import GlobalMessagesInput from "../GlobalMessagesInput";
import StudentList from "../StudentList";

function DriverDashboard() {
  return (
    <Container>
      <MessagesContainer>
        <GlobalMessagesList />
        <GlobalMessagesInput />
      </MessagesContainer>
      <StudentList isDriver />
    </Container>
  );
}

export default DriverDashboard;
