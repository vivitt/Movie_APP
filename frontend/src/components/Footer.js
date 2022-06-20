import * as React from 'react';

import Paper from '@mui/material/Paper';

function Footer({text}) {
    const [value, setValue] = React.useState(0);

  return (
    <Paper variant='elevation0'>
       
     
          <p> {text} </p>
          
        
        </Paper>      

    
  );
}






export default Footer;