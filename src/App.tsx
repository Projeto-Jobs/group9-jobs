import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { RoutesMain } from "./routes/RoutesMain"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />

      <Header />
      <RoutesMain />
    </>
  )
}
