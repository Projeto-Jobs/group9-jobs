import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterProvider } from "../providers/RegisterContext";
import { Administration } from "../pages/AdminPage";
import { ApplicationProvider } from "../providers/ModalContext";
import { LoginProvider } from "../providers/LoginContext";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";
import { CreateVacancyPage } from "../pages/AdmCreateVacancyPage";
import { AdminProvider } from "../providers/AdminContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
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
        <Route
          path="/RegisterPage"
          element={
            <RegisterProvider>
              <RegisterPage />
            </RegisterProvider>
          }
          />
        </Route>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/AdminPage" element={<Administration/>}/>
          <Route path="/CreateVacancyPage" element={
          <AdminProvider>
            <CreateVacancyPage/>
          </AdminProvider>  }/>
        </Route>

    </Routes>
  );
};
