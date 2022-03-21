import MessagesProvider from "./Messages";

const Providers = ({ children }) => (
  <>
    <MessagesProvider>{children}</MessagesProvider>
  </>
);

export default Providers;
