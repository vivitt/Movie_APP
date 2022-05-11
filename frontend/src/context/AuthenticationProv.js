
import React, {useContext, useEffect, useState}  from "react";
import { useLoader } from "./LoadContext";

const AuthenContext = React.createContext("")


const AuthenticationProv = ({ children }) => {    
    
    const [ authData, setAuthData ] = useState({})
    const { setLoading }  = useLoader();
 
    async function getLogUser() {
        console.log('1')

        const response = await fetch("/users", {
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
                setLoading(false);
                console.log('dta', data);
                return data;
            }
            setLoading(false);
            console.log('no user dtaa')
            throw new Error(response.statusText);    
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    useEffect(() => { getLogUser();}, [setLoading]);

    const onLogin = (value) => setAuthData(value);
    const onLogout = () => setAuthData({});

    const value = {
        authData, 
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
