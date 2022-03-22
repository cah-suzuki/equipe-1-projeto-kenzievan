import { UserProvider } from "./User";
import { StudentProvider } from "./Students";
import { MessagesProvider } from "./Messages";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <StudentProvider>
        <MessagesProvider>{children}</MessagesProvider>
      </StudentProvider>
    </UserProvider>
  );
};

export default Providers;
