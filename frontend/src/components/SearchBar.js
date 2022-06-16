import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from "@mui/material/FilledInput";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SearchBar({ setFiltMovies, movies, setMovies, dataMovies, setBack}) {
    
    const sorts = ['Sort by...', 'year', 'rating'];
    const [ search, setSearch ] = useState('');
    const [ sort, setSort ] = useState('');
    
    function sortFilms () {
        setMovies([...dataMovies])
        setFiltMovies([...movies])
        console.log(sort)
        if (sort == 'year') {
            setFiltMovies(movies.sort((a, b) => { return b.year - a.year;}) )
        } else if (sort === 'rating') {
            setFiltMovies(movies.sort((a, b) => { return b.rating - a.rating;}))
        } else if (sort === 'Sort by...'){
            
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
            
            <div className="searchBar">
                
                
                <FormControl sx={{ m: 1 }} fullWidth>
                {/* <InputLabel htmlFor="search">Search movies...</InputLabel>  */}
                <OutlinedInput
                    id="search"
                    type='text'
                    value={search}
                    placeholder="Search movies..."
                    onChange={(event) => setSearch(event.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="search"
                        onClick={submitParams}
                        
                        edge="end"
                        >
                         <SearchIcon></SearchIcon>
                        </IconButton>
                    </InputAdornment>
                    }
                    
                />
        </FormControl>


             
                
                
            </div>
           
            
            <FormControl sx={{ m: 1 , width: '25ch'}}  >
                {/* <InputLabel id="filter"></InputLabel> */}
                <Select 
                variant="outlined"
                 labelId="filter"
                 id="filter"
                 value={sort}
                 defaultValue='Sort by...'
                 onChange={(event) => setSort(event.target.value)}
                >
                    {sorts.map(sort => (<MenuItem value={sort}>{sort}</MenuItem>))}
                </Select>
                 {/* <button onClick={sortFilms}><SortIcon></SortIcon></button>        */}
            </FormControl>
            
        </div>)
}


export default SearchBar;