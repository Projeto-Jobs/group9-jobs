import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterProvider } from "../providers/RegisterContext";
import { Administration } from "../pages/AdminPage";
import { ApplicationProvider } from "../providers/ModalContext";
import { LoginProvider } from "../providers/LoginContext";
import { CreateVacancyPage } from "../pages/AdmCreateVacancyPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ApplicationProvider>
          <ListCompany/>
        </ApplicationProvider>
      }/>
      <Route path="/VacancyPage" element={<VacancyPage/>}/>
      
      <Route 
      path="/LoginPage" 
      element={
      <LoginProvider>
        <LoginPage/>
      </LoginProvider>
      }/>
      
      <Route path="/AdminPage" element={<Administration/>}/>

      <Route
        path="/RegisterPage"
        element={
          <RegisterProvider>
            <RegisterPage />
          </RegisterProvider>
        }
      />
      <Route path="/CreateVacancyPage" element={<CreateVacancyPage/>}/>
    </Routes>
  );
};
