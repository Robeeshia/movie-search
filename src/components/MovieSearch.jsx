import React, { useState,useEffect } from 'react';
import { searchMovie } from '../api/api'; // Adjust the path as per your project structure
import SearchIcon from "../SearchIcon.svg"

const MovieSearch = () => {
  const [searchTerm, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (searchWord,type,page = 1) => {
    try {
      const data = await searchMovie(searchWord,type,page);
      console.log(data);
      setResults(data.Search || []);
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(()=>{
  //   handleSearch("Aaa","S");
  // },[])

  return (
    <div className='movie-home'>
      <h1>Movie land</h1>

      <div className='search'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>
        <img src= {{SearchIcon}} alt ="search"/>
        Search</button>
      </div>


      {error && <div>Error: {error}</div>}
      <ul>
        {results.map((movie) => (<>
        {/* <img src={movie.Poster}/> */}
          <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li></>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
