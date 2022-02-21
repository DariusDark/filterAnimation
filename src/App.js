import { useEffect, useState } from 'react';
import Filter from './Filter';
import Movie from './components/movie/Movie';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=56af74006ef3f9e7763d36ba4f519ab2&language=en-US&page=1');
    const popularMovies = await data.json();
    setMovies(popularMovies.results);
    setFilteredMovies(popularMovies.results);
  }


  return (
    <div className="App">
      <div className="filter__btns">
        <Filter movies={movies} setFiltered={setFilteredMovies} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      </div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="popular-movies">
        <AnimatePresence>
          {filteredMovies.map(movie => (
            <Movie key={movie.id} item={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
