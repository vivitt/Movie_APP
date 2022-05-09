import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextProv"

function SearchBar({getUserFavs}) {
    const activeUser = useUserContext()
    const [filterParams, setFilterParams] = useState();
    const navigate = useNavigate()
    const navigateWatchlist = () => {navigate('/users')}
    
    function sortFilms (event, filtMovies) {
        // let sort = event.target.value;

        // if (sort === 'year') {
        //     filtMovies.sort((a, b) => {
        //         return a.year - b.year;
        //     }) } else if (sort === 'rating') {
        //         filtMovies.sort((a, b) => {
        //             return b.rating - a.rating;
        //     })
        }
    const sorts = ['Sort by...', 'year', 'rating'];
    // const categories = ['Select category...', 'drama', 'SciFi', 'Comedy', 'Western', 'Acction'];
    return (
        <div className="search">
            
            <div className="searchBar">
            <label for="search"></label>
            <input type='text' name="search" placeholder="enter a movie, year or category" className="filterMovie" onChange={(event) => setFilterParams(event.target.value)} value={filterParams} ></input> 
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
            <div className="filter">
            {/* <select>
                {categories.map(cat => (
                    <option>{cat}</option>
                ))}
            </select> */}
            <select placeholder="filter by..." onChange={sortFilms} >
                {sorts.map(sort => (
                     <option>{sort}</option>
             ))}
            </select>
            {(activeUser.userData.name) &&
            <button className="watchlist" onClick={ navigateWatchlist }>
                <i className="fa-solid fa-star"> Fav Movies</i>
            </button>}
            </div>
            
        </div>)
}


export default SearchBar;