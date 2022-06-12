import style from './Movies.module.css'
import FavButton from './FavButton';
import { useAuth } from '../context/AuthenticationProv';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


function InfoMovie({movie, openMovInf, addToFavs, icon}) {

  const activeUser = useAuth();
  // console.log(movie.title)
    return (
        <>
      {  (movie.title === openMovInf[0].title) &&
        <div className={style.info}>
          {/* <div><img src={movie.poster} alt={movie.title} /> </div> */}
          <div>
          <div>
            <h2>{movie.title}</h2>
            </div>
            <div>
            <p>{movie.plot}</p>
            </div>
            <div>
            <p>{movie.year}</p>
            <p><i>{movie.category}</i></p>
            <p>★ {movie.rating}</p>
            </div>
            { (activeUser.authData.name) &&
                        <div className={style.favBtn}> 
                            {/* <FavButton handler={addToFavs} icon={icon} /> */}
                            <button><Favorite></Favorite></button>
                        </div>
                    }
          </div>
        </div>
      } </>
    )
    }


export default InfoMovie;