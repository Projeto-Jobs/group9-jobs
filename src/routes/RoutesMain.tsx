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
<<<<<<< HEAD
import { AdmListProvider } from "../providers/AdmListContext";
import { CreateVacancyPage } from "../pages/AdmCreateVacancyPage";
import { AdminProvider } from "../providers/AdminContext";
import { EditVacancys } from "../components/AdmList/editVacancys";
=======
import { AdmJobListContext } from "../providers/AdmListContext";
import { CreateVacancyPage } from "../pages/AdmCreateVacancyPage";
import { AdminProvider } from "../providers/AdminContext";
>>>>>>> 05fabc05fb2132bc834d7713c8df0d2b355ad81f

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
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/CreateVacancyPage" element={
          <AdminProvider>
            <CreateVacancyPage/>
          </AdminProvider>}/>

          <Route path="EditPage" element={<AdmListProvider>
          <EditVacancys/>
          </AdmListProvider>} />
          
          <Route path="/CreateVacancyPage" element={
          <AdminProvider>
            <CreateVacancyPage/>
          </AdminProvider>}/>
          
          <Route 
          path="/AdminPage" 
          element={
            <LoginProvider>
              <AdmListProvider>
                <Administration/>
                
              </AdmListProvider>
            </LoginProvider>
        />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/CreateVacancyPage"
          element={
            <AdminProvider>
              <CreateVacancyPage />
            </AdminProvider>
          }
        />

        <Route
          path="/CreateVacancyPage"
          element={
            <AdminProvider>
              <CreateVacancyPage />
            </AdminProvider>
          }
        />

        <Route
          path="/AdminPage"
          element={
              <AdmJobListContext>
                <Administration />
              </AdmJobListContext>
          }
        />
      </Route>
    </Routes>
  );
};
