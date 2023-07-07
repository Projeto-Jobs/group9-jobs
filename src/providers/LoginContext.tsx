import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { JobsListContext } from "./JobsListContext"

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
    userLogin: (formData: any) => Promise<void>;
    userLogout: () => void;
    initials: string;
}
interface IUser{
    email: string;
    password: string;
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: ILoginProviderProps) =>{
    
    const [ login, setLogin] = useState<ILoginUser | null>(null)
    console.log(login);
    
    const {setJobsList} = useContext(JobsListContext);
    
    const navigate = useNavigate()

    const initialLetters = (fullName: string):string => {
        const names = fullName.split(' ')

        if (names.length >= 2) {
            const firstLetter = names[0][0];
            const secondLetter = names[1][0];
            return `${firstLetter}${secondLetter}`;

          } else if (names.length === 1) {
            return names[0][0]

          } else {
            return ''
          }
    }
    const nameLS = localStorage.getItem("@Jobs:name")
    const initials = nameLS ? initialLetters(nameLS).toUpperCase() : ''

    const userLogin = async (formData: IUser) =>{
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            setLogin(data.user)
            localStorage.setItem("@Jobs:token", data.accessToken)
            localStorage.setItem("@Jobs:userId", JSON.stringify(data.user.id))
            localStorage.setItem("@Jobs:name", data.user.name)
            navigate("/AdminPage")
            
        } catch (error) {
            alert("Usuário inválido")
        }
    }

    const userLogout = () =>{
        setLogin(null)
        localStorage.removeItem("@Jobs:token")
        localStorage.removeItem("@Jobs:userId")
        const reloadJobs = async () => {
            try {
              const { data } = await api.get(`/jobs?_expand=user`);
              setJobsList(data);
            } catch (error) {
              console.log(error);
            }
          };
          reloadJobs();
        navigate("/")
    }

    return(
        <LoginContext.Provider value={ {initials, userLogin, userLogout} }>
            {children}
        </LoginContext.Provider>
    )
}
