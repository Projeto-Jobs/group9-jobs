import { LoginPage } from "./pages/LoginPage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"

export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
    </>
  );
};
