import React, { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from 'react-router-dom'
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

interface IRegisterNewVacancy {
  newVacancy: (formData: INewVancancy) => Promise<void>;
}

interface INewVancancy {
  position: string,
  sallary?: number,
  description: string,
}

export const AdminContext = createContext<IRegisterNewVacancy>({} as IRegisterNewVacancy);

export const AdminProvider = ({ children }: IAdminProviderProps) => {
  const [jobs, setJobs] = useState<ICompanyJob[]>([]);
  const [Applies, setApplies] = useState<ICompanyApplies[]>([]);
  console.log(Applies);
  
  const navigate = useNavigate()
  const token = localStorage.getItem("@Jobs:token")
  const userId = localStorage.getItem("@Jobs:userId")

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

  const newVacancy = async (formData: INewVancancy) => {
    try {
      const { data } = await api.post("/jobs/", { ...formData, userId: Number(userId) }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setJobs([...jobs, data])
      navigate("/AdminPage")
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <AdminContext.Provider value={{ newVacancy }}>
      {children}
    </AdminContext.Provider>
  );
};
