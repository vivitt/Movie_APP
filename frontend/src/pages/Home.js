
import SearchBar from "../components/SearchBar";

import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthenticationProv";
import AllTheMovies from "../components/AllTheMovies";


const Home = () => {
  //USER
  const {authData} = useAuth();
  const userName = authData.name;

  //MOVIES
  const [ movies, setMovies ] = useState([]);
  const [ filtMovies, setFiltMovies ]  = useState([]);
  const [ dataMovies, setDataMovies ] = useState([]);
  const getMovies = () => {
  fetch ("/movies")
      .then (response => response.json())
      .then (data => {
        setMovies(data.movies)  //TODO why sometimes is working with data.movies and sometimes with data.allTheMovies???? XO
        setFiltMovies(data.movies)
        setDataMovies(data.movies)
        console.log(filtMovies)
      })
      
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
    getMovies();
   }, [])
   
    return (
    <>

    <Title name={userName}/>
    
    <SearchBar  setFiltMovies={setFiltMovies} filtMovies={filtMovies} movies={movies} setMovies={setMovies} dataMovies={dataMovies} />
   
    <AllTheMovies filtMovies = { filtMovies } movies={movies} />
      
   
    </>
  );
};

export default Home;