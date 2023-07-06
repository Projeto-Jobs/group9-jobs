import { useContext } from "react"
import { LoginContext } from "../../providers/LoginContext"
import jobs from "../../assets/jobs.svg"
import { ButtonCompanyStyle, ButtonLeaveStyle, HeaderLoginStyle } from "./style"


export const HeaderLogin = () =>{

    const {userLogout} = useContext(LoginContext)

    return(
        <HeaderLoginStyle>
            <img src={jobs} alt="Logo da empresa" />
            <div>
                <ButtonCompanyStyle>KE</ButtonCompanyStyle>
                <ButtonLeaveStyle onClick={userLogout}>Sair</ButtonLeaveStyle>
            </div>
        </HeaderLoginStyle>
    )
}