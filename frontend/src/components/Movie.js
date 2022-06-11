import { useState } from "react";
import FavButton from "./FavButton";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"
import InfoMovie from "./InfoMovie";


function Movie({item, infoMovieOpen, setInfoMovieOpen }) {
    
    const activeUser = useUserContext()
    const navigate = useNavigate();
    const [infoMovie, setInfoMovie] = useState({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
    const params = useParams()
    
    function toggleInfo() {
        setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" });
        
        if (infoMovieOpen.length < 1) {
       
        setInfoMovie({ category: item.category, poster: item.poster, title: item.title, plot: item.plot, year: item.year, rating: item.rating })
        setInfoMovieOpen([item, ...infoMovieOpen])
        console.log(infoMovieOpen)
       } else {
        setInfoMovieOpen([])
            setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
            console.log(infoMovieOpen)
        }
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
 
    return (
       <li key={item._id}>
           <div className="movieItem">
                <button onClick={toggleInfo}  className="movieBtn" >  
                    <span className="movieImg" >
                        <img src={item.poster} alt={item.title}/>
                    </span>
                </button>
                <h4 className="movieTitle"> {item.title}</h4>
                
                { (activeUser.userData.name) &&
                <span className="favButons"> 
                    <FavButton handler={addToFavs} icon={<i class="fa-solid fa-star">Add to WachList</i>} />
                </span>
                }
            { (infoMovieOpen[0]) && 
                <div className="movInfo">
                    <InfoMovie movie={item} infoMovieOpen={infoMovieOpen}/>
                    
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

