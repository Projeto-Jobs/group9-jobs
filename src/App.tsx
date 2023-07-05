import { ListCompany } from "./pages/HomePage"
import { StyledGlobalStyle } from "./styles/Global"
import { StyledReset } from "./styles/Reset"

export const App = () => {

  return (
    <>
      <StyledReset />
      <StyledGlobalStyle />
      <ListCompany list={[]}/>

    </>
  )
}
