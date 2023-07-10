import { useContext } from "react"
import { LoginContext } from "../../providers/LoginContext"
import jobs from "../../assets/jobs.svg"
import { ButtonCompanyStyle, HeaderLoginStyle } from "./style"
import { StyledOutLineButton } from "../../styles/Global"

export const HeaderLogin = () =>{

    const {initials, userLogout} = useContext(LoginContext)

    return(
        <HeaderLoginStyle>
            <img src={jobs} alt="Logo da empresa" />
            <div>
                <ButtonCompanyStyle>{initials}</ButtonCompanyStyle>
                <StyledOutLineButton id="leave-button" onClick={userLogout}>Sair</StyledOutLineButton>
            </div>
        </HeaderLoginStyle>
    )
}