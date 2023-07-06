import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api";

export interface IAdmJob{
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
    admJob: IAdmJob[];
    deleteVacancy: (jobId: number) => void;
    editVacanciesJob: (edit: IAdmJob) => void;
}

export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmJobListContext = ({children}: IAdmJobList) =>{
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")

    const [ admJob, setAdmJob] = useState<IAdmJob[]>([])
    const [ editForm, setEditForm] = useState<IAdmJob | null>(null)
   
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
    },[])

    

    const deleteVacancy = async (jobId: number) => {
        try {
            await api.delete(`jobs/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            })
            const deleteJobs = admJob.filter((job) => job.id !== jobId)
            setAdmJob(deleteJobs)
        } catch (error) {
           console.log(error) 
        }
    }

     const editVacanciesJob = async (edit: IAdmJob) => {
        try {
            await api.put(`jobs/${edit.id}`, edit, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            const editJobs = admJob.map((job) => job.id === edit.id ? edit : job )
            setAdmJob(editJobs)
            setEditForm(null)
        } catch (error) {
        }
    }

    return(
        <AdmListContext.Provider value={{ admJob, deleteVacancy, editVacanciesJob }}>
            {children}
        </AdmListContext.Provider>
    )
}