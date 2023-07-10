import { createContext, ReactNode } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify";
interface Application {
  jobId: number;
  userId: number;
  name: string;
  email: string;
  linkedin: string;
}
interface ContextApplication {
  registerApplication: (application: Application) => Promise<void>;
}

export const ApplicationsContext = createContext<ContextApplication>({
  registerApplication: () => Promise.resolve(),
})
interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {

  const registerApplication = async (application: Application) => {
    try {
      await api.post("/applications", application)
      toast.success("Cadastro enviado para análise!")
    } catch (error) {
      
    }
  }

  const contextValue: ContextApplication = {
    registerApplication: registerApplication,
  }

  return (
    <ApplicationsContext.Provider value={contextValue}>
      {children}
    </ApplicationsContext.Provider>
  )
}