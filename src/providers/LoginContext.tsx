import { createContext, useContext, useEffect, useState } from "react"
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
    token: string | null;
}

interface IUser{
    email: string;
    password: string;
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: ILoginProviderProps) =>{
    const [ login, setUserLogin] = useState<ILoginUser | null>(null)
    const {setJobsList} = useContext(JobsListContext);
    const [ token, setToken] = useState<string | null>(null)

    useEffect(() => {
        setToken(localStorage.getItem("@Jobs:token"))
    }, [])
    
    const navigate = useNavigate()
    const userLogin = async (formData: IUser) =>{
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            setUserLogin(data.user)
            localStorage.setItem("@Jobs:token", data.accessToken)
            localStorage.setItem("@Jobs:userId", JSON.stringify(data.user.id))
            navigate("/AdminPage")
            setToken(data.accessToken);
        } catch (error) {
            alert("Usuário inválido")
        }
    }

    const userLogout = () =>{
        setUserLogin(null)
        localStorage.removeItem("@Jobs:token")
        localStorage.removeItem("@Jobs:userId")
        setToken(null);
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
        <LoginContext.Provider value={ {login, token, userLogin, userLogout} }>
            {children}
        </LoginContext.Provider>
    )
}
