import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterProvider } from "../providers/RegisterContext";
import { Administration } from "../pages/AdminPage";
import { ApplicationProvider } from "../providers/ModalContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ApplicationProvider>
          <ListCompany/>
        </ApplicationProvider>
      }/>
      <Route path="/VacancyPage" element={<VacancyPage/>}/>
      <Route path="/LoginPage" element={<LoginPage/>}/>
      <Route path="/AdminPage" element={<Administration/>}/>

      <Route
        path="/RegisterPage"
        element={
          <RegisterProvider>
            <RegisterPage />
          </RegisterProvider>
        }
      />
    </Routes>
  );
};
