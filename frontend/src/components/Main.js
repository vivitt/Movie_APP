import Movie from "./Movie";




function Main({filtMovies}) {
 
   return (<div className="movies">
      <ul>
          {filtMovies.map(item => ( <Movie item={item} /> )) }
       </ul>
        
    </div>)
    
}

export default Main;