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
    login: ILoginUser | null;
    userLogin: (formData: any) => Promise<void>;
    userLogout: () => void;
}

interface IUser{
    email: string;
    password: string;
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: ILoginProviderProps) =>{
    const [ login, setUserLogin] = useState<ILoginUser | null>(null)
    const {setJobsList} = useContext(JobsListContext);
    
    const navigate = useNavigate()
    const userLogin = async (formData: IUser) =>{
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            setUserLogin(data.user)
            localStorage.setItem("@Jobs:token", data.accessToken)
            localStorage.setItem("@Jobs:userId", JSON.stringify(data.user.id))
            navigate("/AdminPage")
        } catch (error) {
            alert("Usuário inválido")
        }
    }

    const userLogout = () =>{
        setUserLogin(null)
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
        <LoginContext.Provider value={ {login, userLogin, userLogout} }>
            {children}
        </LoginContext.Provider>
    )
}
