import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

export interface IJob {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
  user: {
    email: string;
    password: string;
    name: string;
    id: number;
  };
}
interface IJobsListProviderProps {
  children: React.ReactNode;
}
interface IJobsListContext {
  jobsList: IJob[];
  setJobsList: React.Dispatch<React.SetStateAction<IJob[]>>;
  filteredList: IJob[];
  setFilteredList: React.Dispatch<React.SetStateAction<IJob[]>>;
  currentJob: IJob;
  setCurrentJob: React.Dispatch<React.SetStateAction<IJob>> ;
}

export const JobsListContext = createContext({} as IJobsListContext)

export const JobsListProvider = ({ children }: IJobsListProviderProps) => {
  const [jobsList, setJobsList] = useState<IJob[]>([])
  const [filteredList, setFilteredList] = useState<IJob[]>([])
  const [currentJob, setCurrentJob] = useState<IJob>({} as IJob)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const { data } = await api.get(`/jobs?_expand=user`);
        setJobsList(data)
      } catch (error) {
        
      }
    }
    loadJobs()
  }, [])
  return (
    <JobsListContext.Provider
      value={{ jobsList, filteredList, setFilteredList, currentJob, setCurrentJob, setJobsList }}
    >
      {children}
    </JobsListContext.Provider>
  )
}
