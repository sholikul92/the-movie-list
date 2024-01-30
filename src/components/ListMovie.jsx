/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ListMovie = ({ movie }) => {
  const imageUrl = import.meta.env.VITE_BASEIMAGEURL;

  return (
    <div className=" border shadow-lg rounded-md">
      <img src={`${imageUrl}/${movie.poster_path}`} className="rounded-t-md" />
      <div className="m-2">
        <Link
          to={`detail/${movie.id}`}
          className="font-bold cursor-pointer hover:underline"
        >
          {movie.title}
        </Link>
        <p className="opacity-70">{movie.release_date}</p>
        <div className="flex gap-1">
          <FaStar className="mt-1 text-yellow-500" />
          <p>{movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
