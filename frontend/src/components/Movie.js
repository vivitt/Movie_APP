import { useState } from "react";
import FavButton from "./FavButton";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"
import InfoMovie from "./InfoMovie";


function Movie({item}) {
    
    const activeUser = useUserContext()
    const navigate = useNavigate();
    const [infoMovie, setInfoMovie] = useState({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
    const params = useParams()
    
    function openMovieInfo() {
        
        setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
        if (infoMovie.title === "") {
        setInfoMovie({ category: item.category, poster: item.poster, title: item.title, plot: item.plot, year: item.year, rating: item.rating })
       } else {
            setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
        }
    }

    function closeMovInfo() {
        
        setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
        
    }
    
    function addToFavs(event) {
        event.preventDefault()
        console.log(item.title)
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/users/favorites/${item.title}`, requestOptions)
            .then(res =>res.json())
            .then(data => {
                console.log('added', data)
                navigate('/')
            })
            
            .catch(error => console.log(error))
        }
        
    // function removeFromFavs(event) {
    //         event.preventDefault()
    //         const requestOptions = {
    //             method: 'POST',
    //             credentials: "include",
    //             headers: { 'Content-Type': 'application/json'},
    //         };
    //         fetch(`/users/removefavorites/${item.title}`, requestOptions)
    //             .then(res =>res.json())
    //                 navigate('/')
    //                 console.log('removed')
    //         .catch(error => console.log(error))
    //     }
        
    


    return (
       <li key={item._id}>
           <div className="movieItem">
            <button onClick={openMovieInfo} >  <span><img src={item.poster} alt={item.title}/></span></button>
            <p> {item.title}</p>
            <p>{item.year}</p>
            
            { (activeUser.userData.name) &&
            <span className="favButons"> 
                <FavButton handler={addToFavs} icon={<i class="fa-solid fa-star"></i>} />
               
            </span>
            }
             { (activeUser.userData.name)&& (infoMovie.title) &&
                <div className="movInfo">
                    
                <InfoMovie movie={item}/>
                <button onClick={closeMovInfo}>X</button>
                </div>
            }
            </div>
        </li>
    )    
}

export default Movie;



        
    // (
    // <div className="Info">
    //  {/* <div><img src={movie.poster} alt={movie.title}/></div>
    //  <div>
    //  <p> {movie.title}</p>
    //  <p>{movie.year}</p>
    //  <p>{movie.category}</p>
    //  <p>{movie.plot}</p>
    //  <p>{movie.rating}</p> */}
    //  </div>
    // )

