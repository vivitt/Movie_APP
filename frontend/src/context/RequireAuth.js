import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useUserContext } from "./UserContextProv"

const RequireAuth = ({children}) => {
    const authUser = useUserContext()

    const location = useLocation()
    
    if(authUser.userData.email === "") {
        return <Navigate to="/login" state={{ from : location }} replace />
}
return   children


}
export default RequireAuth



