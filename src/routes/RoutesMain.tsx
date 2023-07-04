import { Route, Routes } from "react-router-dom";
import { VacancyPage } from "../pages/VacancyPage";

export const RoutesMain = () => {
    return (
        <Routes>
          <Route path="/VacancyPage" element={<VacancyPage />} />
        </Routes>
      );
}