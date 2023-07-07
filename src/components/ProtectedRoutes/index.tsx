import { Navigate, Outlet } from "react-router-dom"
import { AdminProvider } from "../../providers/AdminContext"
import { AdmListProvider } from "../../providers/AdmListContext"


export const ProtectedRoutes = () =>{
    const token = localStorage.getItem("@Jobs:token")
    
    return token ? 
    <AdminProvider>
        <AdmListProvider>
            <Outlet />
        </AdmListProvider>
    </AdminProvider>
    :
     <Navigate to="/"/>
}

