import { createContext, useState } from "react"
import { api } from "../services/api";



interface ILoginProviderProps{
    children: React.ReactNode
}

interface ILoginUser{
    id: number;
    name: string;
    email: string;
}

interface IUserLoginResponse{
    accessToken: string;
    user: ILoginUser;
}

interface ILoginContext{
    login: ILoginUser | null;
    userLogin: (formData: any) => Promise<void>;
    userLogout: () => void;
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: ILoginProviderProps) =>{
    const [ login, setUserLogin] = useState<ILoginUser | null>(null)
    
    const userLogin = async (formData: any) =>{
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            console.log(data)
            setUserLogin(data.user)
            localStorage.setItem("@Jobs:token", data.accessToken)
        } catch (error) {
            console.log(error)
        }
    }

    const userLogout = () =>{
        setUserLogin(null)
        localStorage.removeItem("@Jobs:token")
    }


    return(
        <LoginContext.Provider value={ {login, userLogin, userLogout} }>
            {children}
        </LoginContext.Provider>
    )
}
