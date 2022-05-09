
function InfoMovie({movie}) {
    
    
    console.log(movie.title)
    return (
      
           <div className="Info">
            
            
            
            <p>{movie.year}</p>
            <p>{movie.category}</p>
            <p>{movie.plot}</p>
            <p>{movie.rating} ★ </p>
            
            </div>
       
    )
    }


export default InfoMovie;