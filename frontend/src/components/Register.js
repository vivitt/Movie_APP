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
import { PaperComponent } from './PaperComponent';


const Register = ({setLogin, setRegister, open, setOpen}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

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
    <div>
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Register
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
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
        <Button type="submit" onClick={registerUser}>Next</Button>
        
      </form>
          <p>Allready registered? Please login <a onClick={showLogin}>here</a></p>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
       
         
        <Button onClick={handleClose}><CloseIcon></CloseIcon> </Button>
        </DialogActions>
        
      </Dialog>
      
      
    </div>
  )
};

export default Register;