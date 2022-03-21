import NavBar from "../../components/NavBar";
import {
  Container,
  Content,
  Header,
  LeftContent,
  RightContent,
} from "./styles";
import StudentList from "../../components/StudentList";
import MessagesList from "../../components/messagesList";

function ParentDashboard() {
  return (
    <Container>
      <Header>
        <NavBar />
        <section>
          <h2>Olá Responsável</h2>
          <span>Hoje é dia xx</span>
        </section>
      </Header>
      <Content>
        <LeftContent>
          <StudentList />
        </LeftContent>
        <RightContent>
          <MessagesList />
        </RightContent>
      </Content>
    </Container>
  );
}

export default ParentDashboard;
