import { useEffect, useState } from 'react';
import Filter from './Filter';
import Movie from './components/movie/Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=56af74006ef3f9e7763d36ba4f519ab2&language=en-US&page=1');
    const popularMovies = await data.json();
    setMovies(popularMovies.results);
  }
  console.log(movies)

  return (
    <div className="App">
      <div className="filter__btns">
        <Filter />
      </div>
      <div className="popular-movies">
        {movies.map(movie => (
          <Movie key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
