import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';


function SearchBar({ setFiltMovies, movies, setMovies, dataMovies, setBack}) {
    
    const sorts = ['Sort by...', 'year', 'rating'];
    const [ search, setSearch ] = useState('');
    const [ sort, setSort ] = useState('');
    
    function sortFilms () {
        setFiltMovies([...movies])
        console.log(sort)
        if (sort == 'year') {
            
            setFiltMovies(movies.sort((a, b) => { return b.year - a.year;}) )
        } else if (sort === 'rating') {
            
            setFiltMovies(movies.sort((a, b) => { return b.rating - a.rating;}))
        } else {
            
            setFiltMovies([...movies])
        }
        setMovies([...dataMovies])
    }
    useEffect(() => {
        sortFilms();
       }, [sort])

    function submitParams (event) {
        event.preventDefault();
        if (search !== '')
        setFiltMovies([...movies]);
        setFiltMovies(movies.filter(check));
        setSearch('')
        setBack(true)
    }

    function check(item) {
        if ((item.year).toString() === search || (item.title).toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase() === search.toLowerCase()) {
        return item;}
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
            
            <div className="sort">
                <select placeholder="sort by..." onChange={(event) => setSort(event.target.value)} value={sort} >
                    {sorts.map(sort => (<option>{sort}</option>))}
                </select>
                 {/* <button onClick={sortFilms}><SortIcon></SortIcon></button>        */}
            </div>
            
        </div>)
}


export default SearchBar;