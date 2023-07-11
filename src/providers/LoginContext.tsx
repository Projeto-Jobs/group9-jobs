import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { JobsListContext } from "./JobsListContext"
import { toast } from "react-toastify"

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
    token: string | null;
    login: ILoginUser | null;
}
interface IUser{
    email: string;
    password: string;
}

export const LoginContext = createContext({} as ILoginContext)

export const LoginProvider = ({children}: ILoginProviderProps) =>{
    
    const [ login, setLogin] = useState<ILoginUser | null>(null)
    const {setJobsList} = useContext(JobsListContext);
    const [ token, setToken] = useState<string | null>(null)

    useEffect(() => {
        setToken(localStorage.getItem("@Jobs:token"))
    }, [])

    const navigate = useNavigate()

    const initialLetters = (fullName: string):string => {
        const names = fullName.split(' ')

        if (names.length >= 2) {
            const firstLetter = names[0][0]
            const secondLetter = names[1][0]
            return `${firstLetter}${secondLetter}`;

          } else if (names.length === 1) {
            return names[0][0]

          } else {
            return ''
          }
    }
    const nameLS = login?.name
    const initials = nameLS ? initialLetters(nameLS).toUpperCase() : ''

    useEffect(() => {
        const logged = async () => {
            try {
                const id = localStorage.getItem("@Jobs:userId")
                const { data } = await api.get(`/users/${id}`)
                setLogin(data)

            } catch (error) {
                
    
            }
        }
        logged()
    },[])

    const userLogin = async (formData: IUser) =>{
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            setLogin(data.user)
            localStorage.setItem("@Jobs:token", data.accessToken)
            localStorage.setItem("@Jobs:userId", JSON.stringify(data.user.id))
            navigate("/AdminPage")
            setToken(data.accessToken)
            toast.success(`Login realizado! Bem Vindo ${data.user.name}`)
        } catch (error) {
            toast.error("Usuário ou senha inválido")
        }
    }

    const userLogout = () =>{
        setLogin(null)
        localStorage.removeItem("@Jobs:token")
        localStorage.removeItem("@Jobs:userId")

        setToken(null)
        navigate("/")
        toast.success("Logout concluído!")
    }
    useEffect(() => {
        const reloadJobs = async () => {
            try {
              const { data } = await api.get(`/jobs?_expand=user`);
              setJobsList(data)
            } catch (error) {
              
            }
          }
          reloadJobs()

    })

    return(
        <LoginContext.Provider value={ {login, initials, token, userLogin, userLogout} }>
            {children}
        </LoginContext.Provider>
    )
}
