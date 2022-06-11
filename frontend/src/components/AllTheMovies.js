import { useState } from "react";
import Movie from "./Movie";




function Main({filtMovies}) {
   const [ openMovieInfo, setOpenMovieInfo ] = useState(false);
   const [infoMovieOpen, setInfoMovieOpen] = useState([])
   return (<div className="movies">
      <ul>
          {filtMovies.map(item => ( <Movie item={item} openMovieInfo={openMovieInfo} setOpenMovieInfo={setOpenMovieInfo} infoMovieOpen={infoMovieOpen} setInfoMovieOpen={setInfoMovieOpen} /> )) }
       </ul>
        
    </div>)
    
}

export default Main;