import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

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
    teste: (job:IAdmJob) => void;
}

export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmListProvider = ({children}: IAdmJobList) =>{
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")

    const [ admJob, setAdmJob] = useState<IAdmJob[]>([])

     const [selectedJob, setSelectedJob] = useState<IAdmJob>()
   
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

    const teste = (job: IAdmJob) =>{
        console.log(job)
        setSelectedJob(job)
    }

    console.log(selectedJob)
     const editVacanciesJob = async (formData: IAdmJob) => {
            try {
                await api.put(`/jobs/${selectedJob?.id}`, {
                    position:formData.position,
                    sallary:Number(formData.sallary),
                    description:formData.description,
                   }, {
                       headers: {
                           Authorization: `Bearer ${token}`,
                       },
               })
               const updatedJobs = admJob.map((job) =>
               job.id === formData.id ? formData : job)
               setAdmJob(updatedJobs);
           } catch (error) {
               console.log(error)
           }
    }

    return(
        <AdmListContext.Provider value={{ admJob, deleteVacancy, editVacanciesJob, teste}}>
            {children}
        </AdmListContext.Provider>
    )
}