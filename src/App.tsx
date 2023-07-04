
import { RegisterPage } from "./pages/RegisterPage"
import { RegisterProvider } from "./providers/RegisterContext"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"
 

export const App = () => {

  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />

      <RegisterProvider>
        <RegisterPage/>
      </RegisterProvider>
      
    </>
  )
}
