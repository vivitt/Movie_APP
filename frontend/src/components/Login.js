import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/FavContextProv"
import { useAuth } from "../context/AuthenticationProv";
import { PaperComponent } from './PaperComponent';


const Login = ({setLogin, setRegister, open, setOpen} ) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { onLogin } = useAuth();
  
  const handleClose = () => {
    setOpen(false);
  };
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
        
        onLogin({ email: data.email, name: data.name })
        navigate('/', {replace: true})
        setEmail('');
        setPassword('')
        })
      )
      .catch(err => console.log(err))
      setLogin(false);
  } 
  const errors = {
    email: "invalid username",
    password: "invalid password"
  };
  const renderErrorMessage = (name) =>
  {name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  )}
  const showRegister = () => {
    setLogin(false);
    setRegister(true)
  }
  return (
    <div>
      <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Login
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <form >
              {/* { errMessage && <h4 className="error"> { errMessage } </h4> } */}
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
              <Button type="submit" onClick={logInUser}>Next</Button>
              </form>
              <p>Not resgistered yet?...Please register <a onClick={showRegister}>here</a></p>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
       
        
        <Button onClick={handleClose}><CloseIcon></CloseIcon> </Button>
        </DialogActions>
        
      </Dialog>
    </div>

  )
}
  
export default Login;