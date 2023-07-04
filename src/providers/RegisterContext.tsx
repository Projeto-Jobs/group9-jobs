import React, { createContext } from "react"
import { api } from "../services/api";

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

    const registerUser = async (formData: IUser) => {
        try {
            const { data } = await api.post('/users', formData)
            console.log(data);
            
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