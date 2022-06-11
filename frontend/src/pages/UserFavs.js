import React, { useContext } from "react";

// import SearchBar from "../components/SearchBar";

import { useUserContext } from "../context/UserContextProv"
import { useState, useEffect } from "react";
import Movie from "../components/Movie"
import { NavLink } from "react-router-dom";

const UserFavs = () => {
      
  //USER
  const activeUser = useUserContext();
    console.log(activeUser) 
  //LOADER 
  const [loading, setLoading] = useState(false);
     console.log(loading)
  //FAV MOVIES
  const [favMovies, setFavMovies] = useState([]);
  const userName = activeUser.userData.name.charAt(0).toUpperCase() + activeUser.userData.name.slice(1)
  
  function getFavs() {
      
      
      const requestOptions = {
        method: 'GET',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
    };
      fetch ("/users/favorites", requestOptions)
        .then (response => response.json())
        .then (data => {
          
        setFavMovies(data.favUserMovies)
        console.log('fav movies', data.favUserMovies)
        })
           .then (setLoading(false))
           .catch(err => console.log(err))
        }


        useEffect(() => {getFavs()}, [])

        

    return (
    <>
    <h3>{userName}'s wacht list: </h3> 
    
   
    
    {(favMovies.length > 0 ) ?
    <div>
      <ul> {favMovies.map(item => (< Movie item = {item} favMovies={favMovies} />  ))}
    
 </ul>
 </div>
    : <h4>You don't have favorite movies yet... <br/>
     but you can back to the <NavLink to="/">homepage</NavLink> and add some...</h4>
    
    }


   
    </>
  );
};

export default UserFavs;