import { getMovieList } from "../../api/api";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const imageUrl = import.meta.env.VITE_BASEIMAGEURL;

  useEffect(() => {
    getMovieList().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 lg:m-10 m-5">
      {movies.map((movie) => (
        <div key={movie.id} className=" border shadow-lg rounded-md">
          <img
            src={`${imageUrl}/${movie.poster_path}`}
            className="rounded-t-md"
          />
          <div className="m-2">
            <h3 className="font-bold">{movie.title}</h3>
            <p className="opacity-70">{movie.release_date}</p>
            <p>Rating : {(movie.vote_average).toFixed(1)}/10</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
