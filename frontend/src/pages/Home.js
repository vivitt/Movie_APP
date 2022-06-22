
import SearchBar from "../components/SearchBar";

import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthenticationProv";
import AllTheMovies from "../components/AllTheMovies";


const Home = () => {
  //USER
  const {authData} = useAuth();
  const userName = authData.name
  //const userName = authData.name.charAt(0).toUpperCase() + authData.name.slice(1); 
  
 

  //MOVIES
  const [ movies, setMovies ] = useState([]);
  const [ filtMovies, setFiltMovies ]  = useState([]);
  const [ dataMovies, setDataMovies ] = useState([]);
  const [ back, setBack ] = useState(false)

  

  const getMovies = () => {
  fetch ("/movies")
      .then (response => response.json())
      .then (data => {
        setMovies(data.movies)  
        setFiltMovies(data.movies)
        setDataMovies(data.movies)
        setBack(false) //allTheMovies BTN
      })
      
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
    getMovies();
   }, [])
   
    const backToAll = (event) => {
      event.preventDefault();
      setFiltMovies([...dataMovies])
      setBack(false)
    }
    return (
    <>
    
    {/* <Title text={`Hi ${userName}, welcome to MovieApp!`}/> */}
    
    <SearchBar setFiltMovies={setFiltMovies} filtMovies={filtMovies} movies={movies} setMovies={setMovies} dataMovies={dataMovies} setBack={setBack} />
   
    <AllTheMovies  back={back} setBack={setBack}  backToAll={backToAll} filtMovies = { filtMovies } movies={movies} />
      
   
    </>
  );
};

export default Home;