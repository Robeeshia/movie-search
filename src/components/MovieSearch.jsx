import React, { useState,useEffect } from 'react';
import { searchMovie } from '../api/api'; // Adjust the path as per your project structure
import SearchIcon from "../SearchIcon.svg"
import MovieCard from './MovieCard';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
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

  useEffect(()=>{
    handleSearch("Aaa","S");
  },[])

  return (
    <div className='movie-home'>
      <h1>Movie land</h1>

      <div className='search'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
        <img src= {SearchIcon} alt ="Search" onClick={()=> handleSearch(searchTerm,"s")}/>
      </div>
      
        {results?.length > 0 ? (
          <div className='container'>
          {results.map((movie) => (
            <MovieCard movie={movie}/>
            
        ))}

        </div>
      
      ):(
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
        )
      }
      
    </div>
  );
};

export default MovieSearch;
