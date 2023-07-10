import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterProvider } from "../providers/RegisterContext";
import { Administration } from "../pages/AdminPage";
import { ApplicationProvider } from "../providers/ModalContext";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";
import { CreateVacancyPage } from "../pages/AdmCreateVacancyPage";
import { EditVacancys } from "../components/AdmList/editVacancys";
import { LoginProvider } from "../providers/LoginContext";

export const RoutesMain = () => {

  return (
    <Routes>
      
      <Route element={<PublicRoutes />}>
        <Route
          path="/"
          element={
            <ApplicationProvider>
              <ListCompany />
            </ApplicationProvider>
          }
        />
        <Route path="/VacancyPage" element={<VacancyPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route
          path="/RegisterPage"
          element={
            <RegisterProvider>
              <RegisterPage />
            </RegisterProvider>
          }
        />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/CreateVacancyPage" element={<CreateVacancyPage />} />
        <Route path="EditPage" element={<EditVacancys />} />
        <Route path="/CreateVacancyPage" element={<CreateVacancyPage />} />
        <Route
          path="/AdminPage"
          element={
            <LoginProvider>
                <Administration />
            </LoginProvider>
          }
        />
        <Route
          path="/CreateVacancyPage"
          element={
            <CreateVacancyPage />
          }
        />
        
      </Route>
    </Routes>
  )
}
