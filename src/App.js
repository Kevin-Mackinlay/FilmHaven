import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//15f2ab06

const API_URL = 'https://www.omdbapi.com/?apikey=15f2ab06&s=';

const movie1 = {
  Title: 'The Batman',
  Year: '2022',
  imdbID: 'tt1877830',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}${title}`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>FilmHaven</h1>
      <div className="search">
        <input  placeholder="Search for movies" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <img src={SearchIcon} alt="search icon" onClick={() => searchMovies(search)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          {' '}
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
