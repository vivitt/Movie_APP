import React from "react";
import { useState } from "react";
import { useUserContext } from "../context/UserContextProv"

function SearchBar({ setFiltMovies, filtMovies}) {
    
    const sorts = ['Sort by...', 'year', 'rating'];
    const [filterParams, setFilterParams] = useState();
    
    function sortFilms (event) {
        let sort = event.target.value;
        if (sort === 'year') {
            filtMovies.sort((a, b) => {
                return a.year - b.year;
            }) 
        } else if (sort === 'rating') {
            filtMovies.sort((a, b) => {
                return b.rating - a.rating;
            })
        } else {
            filtMovies.sort((a, b) => {
                return a - b;
            })
        }
    }
    function submitParams (event) {

        let search = event.target.value;
        let exists = filtMovies.some((item) => item.year===search || item.title===search)  
        console.log(exists)
//   if(!exists) {
   
//       const requestOptions = {
//         method: 'POST',
//         credentials: 'include',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ task: value })
//       };
//       fetch("/tasks", requestOptions)
//           .then(response => response.json())
//           .then(data => {
//             console.log(data);
//             getTasks();
//             setValue("");
 
    }
    return (
        <div className="search">
            <div className="searchBar">
                <label for="search"></label>
                <input type='text' name="search" placeholder="enter a movie, year or category" className="filterMovie" onChange={(event) => setFilterParams(event.target.value)} value={filterParams} />
                <button onClick={submitParams} >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="sort">
                <select placeholder="sort by..." onChange={(e) => sortFilms(e.target.value)} >
                    {sorts.map(sort => (
                     <option>{sort}</option>
                ))}
                </select>
           
            </div>
            
        </div>)
}


export default SearchBar;