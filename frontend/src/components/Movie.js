import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv"
import InfoMovie from "./InfoMovie";
import style from "./Movies.module.css"


function Movie({item, openMovInf, setOpenMovInf }) {
    
    const activeUser = useAuth()
    const navigate = useNavigate();
    const [infoMovie, setInfoMovie] = useState({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
    const params = useParams()
    
    function toggleInfo() {
        setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" });
        
        if (openMovInf.length < 1 || item.title !== openMovInf[0].title ) {
       
        setInfoMovie({ category: item.category, poster: item.poster, title: item.title, plot: item.plot, year: item.year, rating: item.rating })
        setOpenMovInf([item, ...openMovInf])
        
       } else {
            setOpenMovInf([])
            setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
            
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
           <div className={style.movieItem}>
                <div>
                    <button onClick={toggleInfo}  className={style.movieBtn} >  
                        <div className={style.movieImg} >
                            <img src={item.poster} alt={item.title}/>
                        </div>
                    </button>
                    {/* <h4 className={style.movieTitle}> {item.title}</h4> */}
                </div>    
                <div>
                    { (openMovInf[0]) && 
                    <div className={style.movInfo}>
                        <InfoMovie movie={item} openMovInf={openMovInf} addToFavs={addToFavs} />
                   
                    </div>
                    }
                </div>
            </div>
        </li>
    )    
}

export default Movie;



    
