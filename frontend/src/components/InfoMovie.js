
function InfoMovie({movie, infoMovieOpen}) {
    
    
    // console.log(movie.title)
    return (
        <>
      {  (movie.title === infoMovieOpen[0].title) &&
        <div className="Info">
            <div>
            <p>{movie.plot}</p>
            </div>
            <div>
            <p>{movie.year}</p>
            <p><i>{movie.category}</i></p>
            <p>★ {movie.rating}</p>
            </div>
        </div>
      } </>
    )
    }


export default InfoMovie;