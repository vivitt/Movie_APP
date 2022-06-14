import { useEffect, useState } from "react";
import Movie from "./Movie";
import style from './Movies.module.css'



function AllTheMovies({filtMovies, back, backToAll}) {
   
   const [openMovInf, setOpenMovInf] = useState([])
   
   return (
      <div className={style.movies}>
         {(back) && <button onClick={backToAll}> All the movies </button> }
         { (filtMovies.length > 0)
         ? <ul>
            {filtMovies.map(item => ( <Movie item={item} openMovInf={openMovInf} setOpenMovInf={setOpenMovInf} /> )) }
         </ul>
         : <div><h3>Nothing here</h3></div>
         }
       </div>)
    
}

export default AllTheMovies;