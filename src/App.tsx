import { StyledGlobalStyle } from "./styles/Global";
import { StyledReset } from "./styles/Reset";
import { JobsListProvider } from "./providers/JobsListContext";
import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/Header";
import { HeaderLogin } from "./components/HeaderLogin";
import { LoginContext } from "./providers/LoginContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const { token } = useContext(LoginContext);
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      {token ? <HeaderLogin /> : <Header />}
      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
