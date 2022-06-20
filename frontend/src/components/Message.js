import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useFavContext } from '../context/FavContextProv';


export default function Message( { title, mssg, openMessage, setOpenMessage }) {
    
  const userFavs = useFavContext();
  
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state; 
  
  function addToFavs(event) {
    event.preventDefault()
    const requestOptions = {
     method: 'POST',
     credentials: "include",
     headers: { 'Content-Type': 'application/json' },
   };
    fetch(`/users/favorites/${title}`, requestOptions)
      .then(res =>res.json())
      .then(data => {
        userFavs.getFavs();
     })
      .catch(error => console.log(error))
      handleClose();
  }
           
const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenMessage(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={addToFavs}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
       
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      
      <Snackbar
         anchorOrigin={{ vertical, horizontal }}
         key={vertical + horizontal}
        open={openMessage}
        autoHideDuration={6000}
        onClose={handleClose}
        message={mssg}
        action={action}
      />
    </div>
  );
}
