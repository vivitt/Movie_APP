
function InfoMovie({movie}) {
    
    
    // console.log(movie.title)
    return (
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
       
    )
    }


export default InfoMovie;