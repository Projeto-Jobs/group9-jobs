import { LoginPage } from "./pages/LoginPage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"
import { RegisterPage } from "./pages/RegisterPage"
import { RegisterProvider } from "./providers/RegisterContext"
import { ListCompany } from "./pages/HomePage"
import { LoginProvider } from "./providers/LoginContext"



export const App = () => {
  return (
    <>
      <ListCompany />
      
      <StyledReset />
      <StyledGlobalStyle />
     
     <LoginProvider>
      <LoginPage/>
     </LoginProvider>


      <RegisterProvider>
        <RegisterPage />
      </RegisterProvider>

      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
    </>
  )
}
