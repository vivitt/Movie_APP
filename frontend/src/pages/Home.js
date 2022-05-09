
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
     
  //LOADER 
  const [loading, setLoading] = useState(false);
    
  //MOVIES
  const [movies, setMovies] = useState([]);
  const [filtMovies, setFiltMovies] = useState([]);
  
  const getMovies = () => {
     
    setLoading(true);
     
    fetch ("/movies")
      .then (response => response.json())
      .then (data => {
        setMovies(data.movies)  //TODO why sometimes is working with data.movies and sometimes with data.allTheMovies???? XO
        setFiltMovies(data.movies)
        //  console.log(data.movies)
      })
      .then (setLoading(false))
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
    getMovies();
   }, [])

    return (
    <Page>
    {(activeUser.userData.name) && 
    <Title name={userName}/>}

    <SearchBar  setFiltMovies={setFiltMovies} />
    <Main filtMovies = { filtMovies } loading={ loading } />
    
   
    </Page>
  );
};

export default Home;