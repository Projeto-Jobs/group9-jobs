import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { RegisterProvider } from "./providers/RegisterContext"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"

import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"



export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />

      <LoginPage/>

      <RegisterProvider>
        <RegisterPage />
      </RegisterProvider>

      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
    </>
  )
}
