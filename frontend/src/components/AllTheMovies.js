import * as React from 'react';
import { useState } from "react";
import Movie from "./Movie";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button  from "@mui/material/Button";

function AllTheMovies({filtMovies, back, backToAll}) {
   const [openMovInf, setOpenMovInf] = useState([{ category: "", poster: "", title: "", plot: "", year: "", rating: "" }])
   return (
      <>
      { (back) && <Button onClick={backToAll}> All the movies </Button> }
         <Box sx={{ flexGrow: 1 }}>
            { (filtMovies.length > 0)
               ?<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                  {filtMovies.map(item => (  <Movie item={item} openMovInf={openMovInf} setOpenMovInf={setOpenMovInf} /> )) }
               </Grid>
               : <div><h3>Nothing here</h3></div>
            }
         </Box>
      </>
   )
    
}

export default AllTheMovies;