import style from './Movies.module.css'
import FavButton from './FavButton';
import { useAuth } from '../context/AuthenticationProv';

function InfoMovie({movie, addToFavs, added}) {
  const activeUser = useAuth();
  return (
    <div className={style.movInfo}>
      <div>
        <h2>{movie.title}</h2>
      </div>
      <div>
        <p>{movie.plot}</p>
      </div>
      <div>
        <p>{movie.year}</p>
        <p><i>{movie.category}</i> &ensp; |&ensp;  ★ {movie.rating}</p>
      </div>
      { (activeUser.authData.name) &&
        <div className={style.favBtn}> 
          <FavButton handler={addToFavs} added={added} />
        </div>
      }
    </div>
    )
  }


export default InfoMovie;