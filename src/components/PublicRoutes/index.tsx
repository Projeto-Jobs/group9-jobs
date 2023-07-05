import { Navigate, Outlet } from "react-router-dom"



export const PublicRoutes = () =>{
    const token = localStorage.getItem("@Jobs:token")

    return !token ? <Outlet/> : <Navigate to="/AdminPage"/>
}