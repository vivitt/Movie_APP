import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Paper from '@mui/material/Paper';
import  Link  from '@mui/material/Link';
function Footer() {
    

  return (
    <Paper variant='elevation0' sx={{backgroundColor:'primary.main'}}>
       
       <div>
          <p><Link color='secondary'>About MovieApp <GitHubIcon fontSize='small'> </GitHubIcon></Link> </p>
          </div>
          <div><p>© Viviana Yanez 2022 | Made with ♥︎</p></div>
         
        
        </Paper>      

    
  );
}






export default Footer;