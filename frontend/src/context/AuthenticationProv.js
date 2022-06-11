
import React, {useContext, useEffect, useState}  from "react";
import { useLoader } from "./LoadContext";
const AuthenContext = React.createContext("")


const AuthenticationProv = ({ children }) => {    
    
    const [ authData, setAuthData ] = useState({})
    const { setLoading }  = useLoader();
 
    async function getLogUser() {
        const response = await fetch("/auth", {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
            },
        });
        try {
            if(response.ok) {
                const data = await response.json();
                onLogin(data);
                setLoading(false) ;
                console.log('data', data);
                return data;
            }
              setLoading(false) ;
            console.log('no user data')
            throw new Error(response.statusText);    
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    useEffect(() => {
        getLogUser();
    }, [setLoading]);

    const onLogin = (value) => setAuthData(value);
    const onLogout = () => setAuthData({});

    const value = {
        authData, 
        setAuthData,
        onLogin,
        onLogout
    };

    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )

}

export default AuthenticationProv;
export const useAuth = () => useContext(AuthenContext)
