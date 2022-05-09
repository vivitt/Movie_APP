import React from "react";
import Page from "../components/Page";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function registerUser(event) {
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, email: email, password: password})
    };
    fetch("/auth/register", requestOptions)
      .then(response => response.json())
      .then(data => {
     
        let newUser = {name: data.name, email: data.email};
        console.log(newUser , '---> registered')
        
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login", {replace: true})
      })
     
    } 
  return (
  <Page> 
  
    <div className="register">
      <form>
        <div>
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
      <p>Allready registered? Please <Link to='/login'>Login</Link></p>
    </div>
  </Page>
  )
};

export default Register;