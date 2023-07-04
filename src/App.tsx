import { RoutesMain } from "./routes/RoutesMain"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
 

export const App = () => {

  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      <RoutesMain />
      <LoginPage/>
    </>
  )
}
