import React, { createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from 'react-router-dom'
interface IRegisterContextProps {
    registerUser: (formData: IUser) => Promise<void>
}
export const RegisterContext = createContext<IRegisterContextProps>({} as IRegisterContextProps)
interface IRegisterProviderProps {
    children: React.ReactNode;
}
interface IUser {
    name: string,
    email: string,
    password: string,
}

export const RegisterProvider = ({ children }: IRegisterProviderProps) => {

    const navigate = useNavigate()

    const registerUser = async ({name, email, password}: IUser) => {
        try {
            const { data } = await api.post('/users',{name, email, password})
            console.log(data);
            navigate("/LoginPage")
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <RegisterContext.Provider value={{registerUser}}>
            {children}
        </RegisterContext.Provider>
    )
}