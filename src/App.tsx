import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
import { JobsListProvider } from "./providers/JobsListContext"
import { RoutesMain } from "./routes/RoutesMain"
import { Header } from "./components/Header"
import { HeaderLogin } from "./components/HeaderLogin"
import { LoginProvider } from "./providers/LoginContext"


export const App = () => {

  const token = localStorage.getItem("@Jobs:token")

  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      
      <LoginProvider>
        {token ? <HeaderLogin/> : <Header/>}
      </LoginProvider>
      
      <JobsListProvider>
        <RoutesMain />
      </JobsListProvider>
    </>
  )
}
