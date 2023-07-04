import { LoginPage } from "./pages/LoginPage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
 

export const App = () => {

  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      <LoginPage/>
    </>
  )
}
