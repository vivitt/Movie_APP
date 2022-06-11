import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"
import { useAuth } from "../context/AuthenticationProv";




//import { UserContext } from "../context/UserContextProv";

const Login = ( ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const activeUser = useUserContext();
  
  const navigate = useNavigate();
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { onLogin } = useAuth();

  function logInUser(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    };
    fetch("/auth/login", requestOptions)
      
      .then ( response => response.json()
      
      .then(data => {
        activeUser.setUserData({name: data.name, email: data.email})
        onLogin({ email: data.email, name: data.name })
        
        navigate('/', {replace: true})
        setEmail('');
        setPassword('')
      })
    )
      
  
      .catch(err => console.log(err))
        // {setErrMessage(err.message)}) 
     // Compare user info
   
     
} 



  const errors = {
    email: "invalid username",
    password: "invalid password"
  };

  


  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  return (

      <div className="login">
        <div className='statusMsg'>{(isSubmitted) && <p>You have succesfully loged in</p>}</div>
        <form >
        {/* { errMessage &&
        <h4 className="error"> { errMessage } </h4> } */}
          <div>
            <label for="email">Email</label>
            <input onChange={(event) => setEmail(event.target.value)}  type="email" id="email" name="email" value={email} required />
            {renderErrorMessage("email")}
          </div>
     
          <div>
            <label for="password">Password</label>
              <input onChange={(event) => setPassword(event.target.value)}  type="password" id="password" name="password" value={password} required />
              {renderErrorMessage("password")}
            </div>
            <button type="submit" onClick={logInUser}>Login</button>
          </form>
          <p>Not resgistered yet?...<Link to='/register'>Register</Link></p>
        </div>
  
  
  )
}
  
export default Login;