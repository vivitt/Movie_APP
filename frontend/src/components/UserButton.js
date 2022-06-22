import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Login from "./Login";
import Register from "./Register"
import { useState } from "react";
import { useAuth } from "../context/AuthenticationProv";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function UserButton() {
    const [open, setOpen] = React.useState(false);
   //LOGIN-REGISTER
   const [ login, setLogin ] = useState(false)
   const [ register, setRegister ] = useState(false)
   

    // const navigate = useNavigate();
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
        .then(res => {if (res.status === 200) {
      
        setAuthData({name:"", email: ""})}})
    }
        

    const logIn = () => {if (login === true) {setLogin (false)} else { setLogin(true)}}
    
    
  
    return (
        <>
        {(!authData.name)
            ? <Button  className="user-button" color='secondary' onClick={logIn}> 
               Login <PersonIcon></PersonIcon>
                </Button> 
            : <Button  color='secondary'  className="user-button" onClick={logOut}> 
               Logout <LogoutIcon></LogoutIcon>
            </Button>
 
    } 
        {(login) && <Login setLogin={setLogin} setRegister={setRegister} open={login} setOpen={setLogin} />}
        
        {(register) && <Register setLogin={setLogin} setRegister={setRegister} open={register} setOpen={setRegister}  />}
    
   </>
   )
}
export default UserButton;