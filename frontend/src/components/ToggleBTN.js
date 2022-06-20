import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../context/ColorModeContext';

export default function ToggleBTN() {
  
  const colorMode = React.useContext(ColorModeContext);
  return (
   <>
      {colorMode.mode} this is : mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {colorMode.mode === 'ligth' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </>
  );
}


