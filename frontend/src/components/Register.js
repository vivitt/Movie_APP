import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Register = ({setLogin, setRegister}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  function registerUser(event) {
    event.preventDefault();
    setError('');
    setShowLoader(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, email: email, password: password})
    };
    fetch("/auth/register", requestOptions)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
        return response.json();
       
        
      } else {
        setError('This email is already taken');
        
      }
    })
      .then ( data => {
        setName("");
        setEmail("");
        setPassword("");
       
       
      }
    )
    setLogin(true);
    setRegister(false);
    } 
    const showLogin = () => {
      setLogin(true);
      setRegister(false)
    }
  return (
  <> 
  
    <div className="register">
      <form>
        <div>
          <div><p>{error}</p></div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} id="email" name="email" value={email} required />
        </div>
  
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit" onClick={registerUser} >Register</button>
      </form>
      <p>Allready registered? Please <a onClick={showLogin}>Login</a></p>
    </div>
  </>
  )
};

export default Register;