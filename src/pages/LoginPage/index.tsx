import { LoginForm } from "../../components/LoginForm"

import { StyledLoginPage } from "./styles"

import LoginPicture from "../../assets/LoginPicture.svg"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <figure>
                <img src={ LoginPicture } alt="" />
            </figure>
            <LoginForm />
        </StyledLoginPage>
    )
}