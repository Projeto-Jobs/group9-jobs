import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

interface IAdmJob{
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
}

interface IAdmApplications{
    id: number;
    jobId: number;
    userId: number;
    name: string;
    email: string;
    linkedin: string;
}

interface IAdmJobList{
    children: React.ReactNode
}

interface IAdmJobListContext{
    admJob: IAdmJob[];
    admApplication: IAdmApplications[]
}


export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmJobListContext = ({children}: IAdmJobList) =>{
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")

    const [ admJob, setAdmJob] = useState<IAdmJob[]>([])
    const [ admApplication, setAdmApplication] = useState<IAdmApplications[]>([])
    console.log(admApplication)
    console.log(admJob)
   
    useEffect(() =>{
        const loadAdmJobs = async () =>{
            try {
                const { data } = await api.get(`users/${userId}/jobs`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAdmJob(data)
            } catch (error) {
                console.log(error)
            }
        }
        loadAdmJobs()

        const loadAdmApplications = async () =>{
            try {
                const { data } = await api.get(`/applications?userId=${userId}&_expand=job`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log("data: ",data)
                setAdmApplication(data)
            } catch (error) {
                console.log(error)
            }
        }
        loadAdmApplications()
    },[])

    return(
        <AdmListContext.Provider value={{ admJob, admApplication }}>
            {children}
        </AdmListContext.Provider>
    )
}