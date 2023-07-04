import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface IJob {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

interface IJobsListProviderProps {
  children: React.ReactNode;
}

interface IJobsListContext {
  jobsList: IJob[];
}

export const JobsListContext = createContext({} as IJobsListContext);

export const JobsListProvider = ({ children }: IJobsListProviderProps) => {
  const [jobsList, setJobsList] = useState<IJob[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
        try {
          const { data } = await api.get(`/jobs`);
          setJobsList(data);
        } catch (error) {
            console.log(error);
        }
    };
    loadJobs();
  }, []);
  return (
    <JobsListContext.Provider value={{ jobsList }}>
      {children}
    </JobsListContext.Provider>
  );
};
