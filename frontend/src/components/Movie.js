import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv"
import InfoMovie from "./InfoMovie";
import style from "./Movies.module.css"
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from "./Item";

import { useFavContext } from "../context/FavContextProv";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
function Movie({item, openMovInf, setOpenMovInf }) {
    
    const activeUser = useAuth()
    const userFavs = useFavContext();
    const navigate = useNavigate();
    const [infoMovie, setInfoMovie] = useState({ id: 0, title: "", year: "", runtime: "", genres: [], director: "", actors: "", plot: "", posterUrl: "" })
    function toggleInfo() {
        setInfoMovie({ id: 0, title: "", year: "", runtime: "", genres: [], director: "", actors: "", plot: "", posterUrl: "" });
        if (openMovInf.length < 1 || item.title !== openMovInf[0].title ) {
            setInfoMovie({ id: item.id, title: item.title, year: item.year, runtime: item.runtime, genres: [...item.genres], director: item.director, actors: item.actors, plot: item.plot, posterUrl: item.posterUrl })
            setOpenMovInf([item])
        } else {
            setOpenMovInf([{ id: 0, title: "", year: "", runtime: "", genres: [], director: "", actors: "", plot: "", posterUrl: "" }])
            setInfoMovie({ id: 0, title: "", year: "", runtime: "", genres: [], director: "", actors: "", plot: "", posterUrl: "" })
        }
    }
    function addToFavs(event) {
        event.preventDefault()
        console.log('add')
        const requestOptions = {
          method: 'POST',
          credentials: "include",
          headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/users/favorites/${item.title}`, requestOptions)
          .then(res =>res.json())
          .then(data => {
            console.log('added', data)
            userFavs.getFavs();
          })
          .catch(error => console.log(error))
        }
            
      function removeFromFavs(event) {
        event.preventDefault()
        const requestOptions = {
          method: 'POST',
          credentials: "include",
          headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/users/removefavorites/${item.title}`, requestOptions)
          .then(res =>res.json())
          .then(data => {
            console.log('removed', data)
            //userFavs.setFavMovies(userFavs.favMovies.filter(item => item !== data))
            userFavs.getFavs();
                    })
            .catch(error => console.log(error))
          }
 
    return (
        <>
        {/* <InfoMovie movie={item} openMovInf={openMovInf} addToFavs={addToFavs} to /> */}
        {(item.title === openMovInf[0].title)
        ? <Grid item xs="auto">
            <Item>
                <div className={style.movieItem}>
                    <Button onClick={toggleInfo}  className={style.movieBtn} >  
                        <div className={style.movieImg} >
                            <img src={item.posterUrl} alt={item.title}/>
                        </div>
                    </Button>
                    <div>
                    <InfoMovie movie={item} ></InfoMovie>
                    { (activeUser.authData.name) &&
                        <div className={style.favBtn}> 
                            {(userFavs.favMovies.some(x => x.title === item.title))
                                ? <Button onClick={removeFromFavs}> <Favorite></Favorite> </Button>
                                : <Button onClick={addToFavs}> <FavoriteBorder></FavoriteBorder>  </Button>
                            }
                        </div>
                    }
                    </div>
                </div>
            </Item>
        </Grid>
        : <Grid item xs="auto">
            <Item>
                <div className={style.movieItem}>
                    <Button onClick={toggleInfo}  className={style.movieBtn} >  
                        <div className={style.movieImg} >
                            <img src={item.posterUrl} alt={item.title}/>
                        </div>
                    </Button>
                </div>
            </Item>
        </Grid>
          
        }
        </>
       
    )    
}

export default Movie;



    
