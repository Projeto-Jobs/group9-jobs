import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";
import { ListCompany } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
    return (
        <Routes>
          <Route path="/" element={<ListCompany list={[]}/>} />
          <Route path="/VacancyPage" element={<VacancyPage />} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/RegisterPage" element={<RegisterPage/>} />
        </Routes>
      )
}