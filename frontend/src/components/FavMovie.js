import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthenticationProv"
import InfoMovie from "./InfoMovie";
import style from "./Movies.module.css"
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from "./Item";
import { useFavContext } from "../context/FavContextProv";
import { Favorite } from '@mui/icons-material';

function FavMovie({item}) {
    const activeUser = useAuth()
    const navigate = useNavigate();
    const userFavs = useFavContext();
    
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
            if (userFavs.favMovies.length === 1) { userFavs.setFavMovies([{ category: "", poster: "", title: "", plot: "", year: "", rating: "" }])} else {
            userFavs.setFavMovies(userFavs.favMovies.filter(item => item.title !== data.title))
            }
            })
            .catch(error => console.log(error))
            
          }

    return (
        <>
      <Grid item xs="auto">
            <Item>
                <div className={style.movieItem}>
                    <div className={style.movieImg} >
                        <img src={item.poster} alt={item.title}/>
                    </div>
                    <InfoMovie movie={item}  ></InfoMovie>
                    <Button onClick={removeFromFavs}> <Favorite></Favorite> </Button>
                </div>
            </Item>
        </Grid>
      
        </>
       
    )    
}

export default FavMovie;



    
