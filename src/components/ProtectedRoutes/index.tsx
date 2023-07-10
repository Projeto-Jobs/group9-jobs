import { Navigate, Outlet } from "react-router-dom"
import { AdmListProvider } from "../../providers/AdmListContext"


export const ProtectedRoutes = () => {
    const token = localStorage.getItem("@Jobs:token")

    return token ?
        <AdmListProvider>
            <Outlet />
        </AdmListProvider>
        :
        <Navigate to="/" />
}

