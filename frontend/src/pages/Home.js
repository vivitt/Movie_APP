
import Page from '../components/Page'
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";
import Title from "../components/Title";
import { useUserContext } from "../context/UserContextProv"
import { useState, useEffect } from "react";


const Home = () => {
  //USER
  const activeUser = useUserContext();
  const userName = activeUser.userData.name.charAt(0).toUpperCase() + activeUser.userData.name.slice(1)
  
  

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
    <Page>
   
    <Title name={userName}/>
    <SearchBar  setFiltMovies={setFiltMovies} filtMovies={filtMovies} />
   
    <Main filtMovies = { filtMovies }  />
      
   
    </Page>
  );
};

export default Home;