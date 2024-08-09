import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

//15f2ab06

const API_URL = 'https://www.omdbapi.com/?apikey=15f2ab06&s=';

const App = () => {
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}${title}`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      console.log(data.Search);
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
      <div className='search'>
        <input className=''
        placeholder='Search for movies'
        value="Batman"
        onChange={()=>{}}></input>
        <img src={SearchIcon} alt='search icon' onClick={() => {}}/>
      </div>
    </div>
  );
};

export default App;
