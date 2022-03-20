import { LeftContainer, RightContainer, MainContainer, PageContainer } from './styles';
import NavBar from '../../components/NavBar';
import StudentList from '../../components/StudentList';
import MessagesList from '../../components/messagesList';
import GroupMessages from '../../components/groupMessages';
// import Header from '../../components/header';

function DriverDashboard() {
  return (
    <PageContainer>
      <NavBar />
      {/* <Header /> */}
      <MainContainer>
        <LeftContainer>
          <StudentList />
        </LeftContainer>
        <RightContainer>
          <GroupMessages />
          <MessagesList />
        </RightContainer>
      </MainContainer>
    </PageContainer>
  )
}

export default DriverDashboard;
