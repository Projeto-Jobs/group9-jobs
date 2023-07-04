import { JobsListProvider } from "./providers/JobsListContext";
import { RoutesMain } from "./routes/RoutesMain";
import { StyledGlobalStyle } from "./styles/Global";
import { StyledReset } from "./styles/Reset";

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
