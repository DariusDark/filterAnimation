import { motion } from "framer-motion";

function Movie({ item: { title, backdrop_path } }) {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} layout>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
    </motion.div>
  );
}

export default Movie;
