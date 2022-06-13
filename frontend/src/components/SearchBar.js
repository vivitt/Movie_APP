import React from "react";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';


function SearchBar({ setFiltMovies, filtMovies, movies, setMovies, dataMovies}) {
    
    const sorts = ['Sort by...', 'year', 'rating'];
    const [ search, setSearch ] = useState();
    const [ sort, setSort ] = useState();
    
    function sortFilms (event) {
        event.preventDefault();
        setSort(event.target.value);
        setFiltMovies([...movies])
        console.log(sort)
        if (sort == 'year') {
            setFiltMovies(movies.sort((a, b) => {
                return b.year - a.year;
            }) )
            console.log(filtMovies)
        } else if (sort === 'rating') {
            
            setFiltMovies(movies.sort((a, b) => {
                return b.rating - a.rating;
            }))
        } else {
            
            setFiltMovies([...dataMovies])
        }
        
        setMovies([...dataMovies])
    }
    
    function submitParams (event) {
        event.preventDefault();
        setFiltMovies([...movies]);
        let exists = movies.some((item) => (item.year).toString() === search || (item.title).toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase() === search.toLowerCase());
        setFiltMovies(movies.filter(check));
        console.log(filtMovies)
        console.log(exists)
        setSearch('')
    }

    function check(item) {
        if ((item.year).toString() === search || (item.title).toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase() === search.toLowerCase())
        return item;
      }
    return (
        <div className="search">
            <form>
            <div className="searchBar">
                
                <label for="search"></label>
             
                <input type='text' name="search" placeholder="enter a movie, year or category" className="filterMovie" onChange={(event) => setSearch(event.target.value)} value={search} />
                <button onClick={submitParams} >
                    <SearchIcon></SearchIcon>
                </button>
                
            </div>
            </form>
            <form>
            <div className="sort">
                <select placeholder="sort by..." onChange={sortFilms} value={sort} >
                    {sorts.map(sort => (<option>{sort}</option>))}
                </select>
                 {/* <button onClick={sortFilms}><SortIcon></SortIcon></button>        */}
            </div>
            </form>
        </div>)
}


export default SearchBar;