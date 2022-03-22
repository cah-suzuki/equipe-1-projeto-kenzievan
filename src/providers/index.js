import { UserProvider } from "./User";
import { StudentProvider } from "./Students";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <StudentProvider>{children}</StudentProvider>
    </UserProvider>
  );
};

export default Providers;
