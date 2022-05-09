

import Movie from "./Movie";

import Loader from "./Loader";


function Main({filtMovies, loading}) {
 
   return (<div className="movies">
        {(loading) && <Loader />}
        
        <ul>
          {filtMovies.map(item => (Movie({item, filtMovies}) ))}
       </ul>
        
    </div>)
    
}

export default Main;