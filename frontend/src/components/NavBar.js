import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../context/AuthenticationProv';
import UserButton from './UserButton';
import { NavLink } from 'react-router-dom'
import Link from '@mui/material/Link'

import ToggleBTN from './ToggleBTN';



const NavBar = () => {
  const { authData } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           🎬 MovieApp 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                   { (authData.name) && 
                <MenuItem key='Myfavs' onClick={handleCloseNavMenu} >
                   <Link underline="none"  color="inherit" href='/users'>
                  <Typography textAlign="center">My favs ♥️</Typography>
                  </Link> 
                </MenuItem>
                }
                <MenuItem key='Login' onClick={handleCloseNavMenu} >
                   <Link underline="none"  color="inherit" >
                   <Typography textAlign="center"> <UserButton /></Typography>
                  </Link> 
                </MenuItem>
              
            
                {/* <MenuItem key='about' onClick={handleCloseNavMenu} >
                <Link  underline="none" color="inherit" href='https://github.com/vivitt/Movie_APP' target='blank'  >
                   <Typography textAlign="center" >About MovieApp</Typography>
                </Link>
                </MenuItem> */}
              
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 2,
              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            🎬 MovieApp 🎬
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'}}>
            

          { (authData.name) && 
                <Button
                key='myFavs'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'secondary.main', display: 'block' }}
                href="/users"
              > 
                  My favs ♥️
                </Button>
                 }
                  <UserButton></UserButton>
                {/* <Button key='about'
                color='secondary'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                href="/about"
                >
                  About MovieApp
                </Button> */}
          </Box>
         

          <Box sx={{ flexGrow: 0, width:{xs: '10%', md: '5%'}}}>
          
  
           
           <ToggleBTN></ToggleBTN>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
