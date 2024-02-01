import { getDetailsMovieList } from "../api/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../components/Header";

const DetailPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const imageUrl = import.meta.env.VITE_BASEIMAGEURL;

  useEffect(() => {
    getDetailsMovieList(id).then((result) => {
      setMovies(result);
    });
  }, [id]);

  const bgImage = `${imageUrl}/${movies.backdrop_path}`;
  
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col-reverse lg:flex-row justify-end lg:justify-evenly items-center gap-5 bg-gradient-to-b from-slate-500 via-slate-800 to-slate-950">
        <div className="text-white flex flex-col flex-wrap lg:w-[30em] gap-3 lg:gap-5 p-5">
          <h3 className="text-4xl lg:text-6xl font-semi-bold -ml-1">
            {movies.title}
          </h3>
          <div className="flex">
            <span className="mr-3">{movies.release_date}</span>
            <FaStar className="text-yellow-500 mt-1 mr-1" />
            <span>{(movies.vote_average)?.toFixed(1)}</span>
          </div>
          <div>
            {movies.genres?.map((genre) => (
              <span
                key={genre.id}
                className="mr-3 border-r last-of-type:border-none pr-3 opacity-80"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-justify">{movies.overview}</p>
        </div>
        <div className="">
          <img src={bgImage} alt="backdrop_path" className="rounded-md" />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
