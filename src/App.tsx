import { StyledGlobalStyle } from "./styles/Global";
import { StyledReset } from "./styles/Reset";
import { JobsListProvider } from "./providers/JobsListContext";
import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/Header";
import { HeaderLogin } from "./components/HeaderLogin";
import { LoginContext } from "./providers/LoginContext";
import { useContext } from "react";

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
    </>
  );
};
