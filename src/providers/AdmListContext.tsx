import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

export interface IAdmJob{
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
    job: IAdmJob;
}

interface IAdmJobList{
    children: React.ReactNode
}



interface IAdmJobListContext{
    admJob: IAdmJob[];
    admApplication: IAdmApplications[]
    deleteVacancy: (jobId: number) => void;
    editVacanciesJob: (edit: IAdmJob) => void;
    teste: (job:IAdmJob) => void;
}

export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmListProvider = ({children}: IAdmJobList) =>{
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")

    const [ admJob, setAdmJob] = useState<IAdmJob[]>([])

    const [ admApplication, setAdmApplication] = useState<IAdmApplications[]>([])

    const [selectedJob, setSelectedJob] = useState<IAdmJob | undefined>(undefined);
   
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
                setAdmApplication(data)
            } catch (error) {
                console.log(error)
            }
        }
        loadAdmApplications()
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
        setSelectedJob({...job})
     
    }

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
               job.id === selectedJob?.id ? { ...selectedJob, ...formData } : job);
               setAdmJob(updatedJobs);
               
           } catch (error) {
               console.log(error)
           }
    }

    return(
        <AdmListContext.Provider value={{ admJob, deleteVacancy, editVacanciesJob, teste, admApplication}}>
            {children}
        </AdmListContext.Provider>
    )
}