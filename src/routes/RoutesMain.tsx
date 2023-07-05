import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RegisterProvider } from "../providers/RegisterContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ListCompany list={[]} />} />
      <Route path="/VacancyPage" element={<VacancyPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <RegisterProvider>
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </RegisterProvider>
    </Routes>
  );
};
