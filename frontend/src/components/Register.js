import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { PaperComponent } from './PaperComponent';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Message from './Message';


const Register = ({setLogin, setRegister, open, setOpen }) => {
  ///USER
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //ERRR
  const [error, setError] = useState(false);
  const [errMssg, setErrMssg] = useState(null);
  //LOADER
  const [showLoader, setShowLoader] = useState(false);
  ////  password visibility icon
  const [ showPassword, setShowPassword ] = useState();
  const handleShowPass = (e) => {e.preventDefault();
    (showPassword) ?setShowPassword(false):setShowPassword(true); }
  ///CLOSE DIALOG
  const handleClose = () => {
    setOpen(false);
  };
  //register func
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
        
        response.json()
        .then ( data => {
          setName("");
          setEmail("");
          setPassword("");
          setLogin(true);
          setRegister(false);
      })
       
      
      .catch(err => {
      
      setError(true)
      
      console.log(errMssg)
      response.text()
      setErrMssg(err.response.data)
      })
    })
  }
  ///LOGIN LINK
  const showLogin = () => {
      setLogin(true);
      setRegister(false)
    }

  return (
    <div>
      
    <Dialog
      open={open}
      onClose={handleClose}
      // PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Register</DialogTitle>
      
        <DialogContent>
       
          <DialogContentText>
          {(error) ? <span className='errosMssg'><p>{errMssg}</p></span>
          :<div></div>}
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              required
              type="text"
              value={name}
              onChange={(event) => {setName(event.target.value); setError(false)}}
              label="name"
              />
          </FormControl>
          </DialogContentText>
          <DialogContentText>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              required
              type="text"
              value={email}
              onChange={(event) => {setEmail(event.target.value); setError(false)}}
              label="email"
              />
          </FormControl>
          </DialogContentText>
          <DialogContentText>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => {setPassword(event.target.value);setError(false)}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPass}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="password"
            />
          </FormControl>
          </DialogContentText>
          <DialogContentText>
          <Button variant='contained' type="submit" onClick={registerUser}>Register</Button>
        
        
          <p>Allready registered? Please login <Link color='secondary'  onClick={showLogin}>here</Link></p>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
       
         
        <Button onClick={handleClose} color='secondary' ><CloseIcon></CloseIcon> </Button>
        </DialogActions>
        
      </Dialog>
      
     
    </div>
  )
};

export default Register;