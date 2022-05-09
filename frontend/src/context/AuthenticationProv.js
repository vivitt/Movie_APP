
import React, {useContext}  from "react";

import { Navigate, useLocation } from 'react-router-dom';
import {useUserContext, UserContext} from './UserContextProv'


const RequireAuth = ({children}) => {
    
    const authUser = useUserContext()
    
    const location = useLocation()

    if(authUser.userData.email === "") {
        return <Navigate to="/login" state={{ from : location }} replace />
    }
    return   children

    
}

export default RequireAuth



// export const RequireAuth = ({ children }) => {
//   const { authData } = useState(false);
//   const location = useLocation();
//   console.log({authData})
//   if (!authData) {
//     return <Navigate to="/login" state={{ from: location }} replace />
//   }

//   return   <AuthContext.Provider value={{authData}}>
//   //       {children}
//   //     </AuthContext.Provider>;
// }

// export default RequireAuth