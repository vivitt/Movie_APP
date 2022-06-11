
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"
import Login from "./Login";
import Register from "./Register"
import { useState } from "react";
import { useAuth } from "../context/AuthenticationProv";

function UserButton() {
    
   //LOGIN-REGISTER
   const [ login, setLogin ] = useState(false)
   const [ register, setRegister ] = useState(false)
   

    const navigate = useNavigate();
    const {authData} = useAuth();
    const {setAuthData} = useAuth();
    
    function logOut(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'GET',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        
        };
    
        fetch('/auth/logout', requestOptions)
        .then(res => {if (res.status === 200) {console.log('session ended!')
        navigate('/', {replace:true})
        setAuthData({name:"", email: ""})}})
    }
        
    // const logIn = () => {navigate('/login')}
    const logIn = () => {if (login === true) {setLogin (false)} else { setLogin(true)}}
    
    
  
    return (
        <>
        {(!authData.name)
            ? <button className="user-button" onClick={logIn}> 
                <i className="fa-solid fa-user fa-xl"> </i>
                </button> 
            : <button className="user-button" onClick={logOut}> 
                <i className="fa-solid fa-right-from-bracket fa-xl"></i>
            </button>
 
    } 
        {(login) && <Login setLogin={setLogin} setRegister={setRegister} />}
        
        {(register) && <Register setLogin={setLogin} setRegister={setRegister} />}
    
   </>
   )
}
export default UserButton;