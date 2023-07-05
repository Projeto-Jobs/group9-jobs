import { LoginPage } from "./pages/LoginPage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"
import { RegisterPage } from "./pages/RegisterPage"
import { RegisterProvider } from "./providers/RegisterContext"




export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
{/* 
      <LoginPage/>

      <RegisterProvider>
        <RegisterPage />
      </RegisterProvider> */}

      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
    </>
  )
}
