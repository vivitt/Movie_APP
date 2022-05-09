
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"


function UserButton() {
    
    const navigate = useNavigate();
    let activeUser = useUserContext();
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
        activeUser.setUserData({name:"", email: ""})}})
    }
        
    const logIn = () => {navigate('/login')}
  
    return (
        <>
        {(!activeUser.userData.name)
            ? <button className="user-button" onClick={logIn}> 
                <i className="fa-solid fa-user fa-xl"> </i>
                </button> 
            : <button className="user-button" onClick={logOut}> 
                <i className="fa-solid fa-right-from-bracket fa-xl"></i>
            </button>
 
    }
   </>
   )
}
export default UserButton;