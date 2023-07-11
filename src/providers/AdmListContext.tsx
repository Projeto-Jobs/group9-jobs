import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

export interface IAdmJob {
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
}
interface IAdmApplications {
    id: number;
    jobId: number;
    userId: number;
    name: string;
    email: string;
    linkedin: string;
    job: IAdmJob;
}
interface IAdmJobList {
    children: React.ReactNode
}
interface IAdmJobListContext {
    admJob: IAdmJob[];
    selectedJob: IAdmJob | undefined;
    option: string;
    setOpetion: React.Dispatch<React.SetStateAction<string>>;
    admApplication: IAdmApplications[];
    deleteVacancy: (jobId: number) => void;
    newVacancy: (formData: INewVancancy) => Promise<void>;
    editVacanciesJob: (edit: IAdmJob) => void;
    setAdmJob: React.Dispatch<React.SetStateAction<IAdmJob[]>>;
    teste: (job: IAdmJob) => void;
}
interface INewVancancy {
    position: string,
    sallary?: number,
    description: string,
}

export const AdmListContext = createContext({} as IAdmJobListContext)

export const AdmListProvider = ({ children }: IAdmJobList) => {
    const userId = localStorage.getItem("@Jobs:userId")
    const token = localStorage.getItem("@Jobs:token")
    const [admJob, setAdmJob] = useState<IAdmJob[]>([])
    const [admApplication, setAdmApplication] = useState<IAdmApplications[]>([])
    const [selectedJob, setSelectedJob] = useState<IAdmJob | undefined>(undefined)
    const [option, setOpetion] = useState("")
    const navigate = useNavigate()

    useEffect(() => {

        const loadAdmJobs = async () => {
            try {
                const { data } = await api.get(`users/${userId}/jobs`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAdmJob(data)
            } catch (error) {

            }
        }
        loadAdmJobs()

        const loadAdmApplications = async () => {
            try {
                const { data } = await api.get(`/applications?userId=${userId}&_expand=job`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
                setAdmApplication(data)
            } catch (error) {

            }
        }
        loadAdmApplications()

    }, [])

    const newVacancy = async (formData: INewVancancy) => {
        try {
            const { data } = await api.post("/jobs/", { ...formData, userId: Number(userId) }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAdmJob([...admJob, data])
            navigate("/AdminPage")
            toast.success(`Nova vaga criada: ${formData.position}`)
        } catch (error) {

        }
    }

    const deleteApplicationByJobId = (jobId: number) => {
        const updatedApplications = admApplication.filter(
            (application) => application.job.id !== jobId
        )
        setAdmApplication(updatedApplications);
    }

    const deleteVacancy = async (jobId: number) => {
        try {
            await api.delete(`jobs/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const deleteJobs = admJob.filter((job) => job.id !== jobId)
            setAdmJob(deleteJobs)
            deleteApplicationByJobId(jobId)
            toast.success(`Vaga deletada!`)
        } catch (error) {
           
        }
    }

    const teste = (job: IAdmJob) => {
        setSelectedJob({ ...job })
    }

    const editVacanciesJob = async (formData: IAdmJob) => {

        try {
            const {data} = await api.put(`/jobs/${selectedJob?.id}`, formData,
             {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            const filterJob = admJob.filter(item => item.id !== selectedJob?.id);
            setAdmJob([...filterJob, data])
         
            const responseApplication = await api.get(`/applications?userId=${userId}&_expand=job`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setAdmApplication(responseApplication.data);
            navigate("/AdminPage")
            setOpetion("Vagas")
            toast.success(`Alterações realizadas!`)

        } catch (error) {
            
        }
    }

    return (
        <AdmListContext.Provider value={{ admJob, selectedJob, option, setOpetion, newVacancy, deleteVacancy, setAdmJob, editVacanciesJob, teste, admApplication }}>
            {children}
        </AdmListContext.Provider>
    )
}