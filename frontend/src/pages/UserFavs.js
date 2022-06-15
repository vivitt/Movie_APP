import { useState, useEffect } from "react";
import FavMovie from "../components/FavMovie"
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv";
import { useFavContext } from "../context/FavContextProv";
const UserFavs = () => {
      
  //user context
  let { authData } = useAuth();
  const userName = authData.name.charAt(0).toUpperCase() + authData.name.slice(1);
  //FAV MOVIES
  const userFavs = useFavContext();
  
  useEffect(() => {userFavs.getFavs()}, [])
  
  return (
    <>
    <h3>{userName}'s wacht list: </h3> 
    {(userFavs.favMovies[0].title !== '') 
    ?
    <div>
      <ul> {userFavs.favMovies.map(item => (< FavMovie item={item}  />  ))}
    
 </ul>
 </div>
    : <h4>You don't have favorite movies yet... <br/>
     but you can back to the <NavLink to="/">homepage</NavLink> and add some...</h4>
    
    }


   
    </>
  )
};

export default UserFavs;