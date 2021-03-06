import React, { useContext, useState } from "react";
import { useAuth } from "./AuthenticationProv";

export const FavContext = React.createContext({});

export const FavContextProv = ({ children }) => {
  //User
  const {authData} = useAuth()
  const [favMovies, setFavMovies] = useState([{ category: "", poster: "", title: "", plot: "", year: "", rating: "" }]);
  
  function getFavs() {
    const requestOptions = {
      method: 'GET',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
    };
    fetch ("/api/users/favorites", requestOptions)
      .then (response => response.json())
      .then (data => {
      setFavMovies(data.favUserMovies)
      
    })
      .catch(err => console.log(err))
  }
          
  
    return (
      <FavContext.Provider value={{favMovies, setFavMovies, getFavs }} >
        {children}
      </FavContext.Provider>
    );
  }
  
export const useFavContext = () => useContext(FavContext)
export default FavContextProv
