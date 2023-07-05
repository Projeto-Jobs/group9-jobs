import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface ICompanyJob {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

export interface ICompanyApplies {
  id: number;
  jobId: number;
  userId: number;
  name: string;
  email: string;
  linkedin: string;
}

interface IAdminProviderProps {
  children: React.ReactNode;
}

export const AdminContext = createContext({});

export const AdminProvider = ({ children }: IAdminProviderProps) => {
  const [jobs, setJobs] = useState<ICompanyJob[]>([]);
  const [Applies, setApplies] = useState<ICompanyApplies[]>([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inp6MUBtYWlsLmNvbSIsImlhdCI6MTY4ODU2NDY5NCwiZXhwIjoxNjg4NTY4Mjk0LCJzdWIiOiI3In0.rC_Fnatd_HBTYSyOE8xm8-EpbQutplMO3IwMGFxB9SM";
  const userId = 1;

  useEffect(() => {
    const loadCompanyJobs = async () => {
      try {
        const { data } = await api.get(`users/${userId}/jobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCompanyJobs();

    const loadApplies = async () => {
      try {
        const { data } = await api.get(`users/${userId}/applications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setApplies(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadApplies();
  }, []);
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};
