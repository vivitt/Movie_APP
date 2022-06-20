import { useState, useEffect } from "react";
import FavMovie from "../components/FavMovie"
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv";
import { useFavContext } from "../context/FavContextProv";
import Title from "../components/Title";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Message from "../components/Message";

const UserFavs = ({openMessage, setOpenMessage, mssg, setMssg}) => {
      
  //user context
  let { authData } = useAuth();
  const userName = authData.name.charAt(0).toUpperCase() + authData.name.slice(1);
  //FAV MOVIES
  const userFavs = useFavContext();
  
  useEffect(() => {userFavs.getFavs()}, [])

  const [ title, setTitle ] = useState('')
  return (
   <>
      <Message openMessage={openMessage} setOpenMessage={setOpenMessage} mssg={mssg}
 setMssg={setMssg} title={title}></Message> 
 <Title text={`${userName} favs movies ❤️`}/>
      
      <Box sx={{ flexGrow: 1 }}>
      
        {(userFavs.favMovies[0].title !== '') 
               ?  <><p>Click the heart icon to remove an item</p>
               <Grid container
               direction="row"
               justifyContent="space-evenly"
               alignItems="center"
               spacing={3} >
    
    {userFavs.favMovies.map(item => (< FavMovie title={title} setTitle={setTitle} item={item} openMessage={openMessage} setOpenMessage={setOpenMessage} mssg={mssg}
 setMssg={setMssg} />  ))}
    
 </Grid></>
 
    : 
    <><h4>You don't have favorite movies yet... <br/>
     but you can back to the <NavLink to="/">homepage</NavLink> and add some...</h4>
     </>
    }


   
    </Box>
    </>
  )
};

export default UserFavs;