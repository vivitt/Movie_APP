import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv"
import InfoMovie from "./InfoMovie";
import style from "./Movies.module.css"
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from "./Item";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
function Movie({item, openMovInf, setOpenMovInf, added, setAdded}) {
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
            setOpenMovInf([{ category: "", poster: "", title: "", plot: "", year: "", rating: "" }])
            setInfoMovie({ category: "", poster: "", title: "", plot: "", year: "", rating: "" })
        }
    }
    function addToFavs(event) {
        
        event.preventDefault()
        if (added === true) {setAdded(false)} else {setAdded(true)}
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
        <>
        {/* <InfoMovie movie={item} openMovInf={openMovInf} addToFavs={addToFavs} to /> */}
        {(item.title === openMovInf[0].title)
        ? <Grid item xs="auto">
            <Item>
                <div className={style.movieItem}>
                    <Button onClick={toggleInfo}  className={style.movieBtn} >  
                        <div className={style.movieImg} >
                            <img src={item.poster} alt={item.title}/>
                        </div>
                    </Button>
                    <InfoMovie movie={item} addToFavs={addToFavs} added={added} ></InfoMovie>
                </div>
            </Item>
        </Grid>
        : <Grid item xs="auto">
            <Item>
                <div className={style.movieItem}>
                    <Button onClick={toggleInfo}  className={style.movieBtn} >  
                        <div className={style.movieImg} >
                            <img src={item.poster} alt={item.title}/>
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



    
