import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />

      <Header />
      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>

    </>
  )
}
