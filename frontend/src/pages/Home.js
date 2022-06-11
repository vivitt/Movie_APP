
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthenticationProv";


const Home = () => {
  //USER
  const {authData} = useAuth();

  const userName = authData.name
  
  
  
  //MOVIES
  const [movies, setMovies] = useState([]);
  const [filtMovies, setFiltMovies] = useState([]);

  const getMovies = () => {
  fetch ("/movies")
      .then (response => response.json())
      .then (data => {
        setMovies(data.movies)  //TODO why sometimes is working with data.movies and sometimes with data.allTheMovies???? XO
        setFiltMovies(data.movies)
        //  console.log(data.movies)
      })
      
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
    getMovies();
   }, [])

    return (
    <>

    <Title name={userName}/>
    <SearchBar  setFiltMovies={setFiltMovies} filtMovies={filtMovies} />
   
    <Main filtMovies = { filtMovies }  />
      
   
    </>
  );
};

export default Home;