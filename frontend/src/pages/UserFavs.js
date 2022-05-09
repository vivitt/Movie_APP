import React, { useContext } from "react";
import Page from '../components/Page'
// import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { useUserContext } from "../context/UserContextProv"
import { useState, useEffect } from "react";
import Movie from "../components/Movie"


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
      
      setLoading(true);
      
      fetch ("/users/favorites")
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
    <Page>
    <h3>{userName}'s wacht list: </h3> 
    
   
    
    {(favMovies.length > 0 ) ?
    <div>
      
    <ul>
    {favMovies.map(item => (Movie({item, favMovies}) ))}
 </ul>
 </div>
    : <h4>You don't have favorite movies yet...  but you can go to Home and add some...</h4>
    
    }


   
    </Page>
  );
};

export default UserFavs;