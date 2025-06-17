import { useState,useEffect } from "react"
import Movie from './Movies.jsx'
import './App.css'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a22fd553'

function App() {
const[movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman');

  }, [])

  return (
    <div>
      <h1 className="header">Movie Website Search</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onClick={(e) => searchMovies(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass" onClick={() => searchMovies(document.querySelector('input').value)}></i>
      </div>
      <div className="container">
        {movies?.length > 0 ? (
          <Movie movie={movies[0]} />
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  )
}



export default App
