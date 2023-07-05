import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ListCompany } from "./index"

export interface ICompany {
    userId: string,
    id: number,
    position: string,
    sallary: number,
    description: string,
}

export const Home = () => {

    const [list, setList] = useState<ICompany[]>([])

    useEffect(() => {
        const RenderCompany = async () => {
            try {
                const response = await api.get("/jobs")
                console.log(response)
                setList(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        RenderCompany()
    },[])

    return(
        <>     
        <ListCompany/>
        </>
    )
}