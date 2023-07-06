import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api";

interface IAdmJob{
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
}

interface IAdmJobList{
    children: React.ReactNode
}

interface IAdmJobListContext{
    admJob: IAdmJob[]
}


export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmJobListContext = ({children}: IAdmJobList) =>{
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")

    const [ admJob, setAdmJob] = useState<IAdmJob[]>([])
   
    useEffect(() =>{
        const loadAdmJobs = async () =>{
            try {
                const { data } = await api.get(`users/${userId}/jobs`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAdmJob(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        loadAdmJobs()
    },[])

    return(
        <AdmListContext.Provider value={{ admJob }}>
            {children}
        </AdmListContext.Provider>
    )
}