import { useState } from "react";
import Movie from "./Movie";
import style from './Movies.module.css'



function Main({filtMovies}) {
   
   const [openMovInf, setOpenMovInf] = useState([])
   
   return (<div className={style.movies}>
      <ul>
          {filtMovies.map(item => ( <Movie item={item} openMovInf={openMovInf} setOpenMovInf={setOpenMovInf} /> )) }
       </ul>
        
    </div>)
    
}

export default Main;