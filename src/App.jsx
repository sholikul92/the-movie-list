import { useState, useEffect, useRef } from "react";
import { getMovieList } from "./api/api";
import { searchMovie } from "./api/api";
import { IoIosSearch } from "react-icons/io";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const search = useRef();

  const imageUrl = import.meta.env.VITE_BASEIMAGEURL;

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const result = await getMovieList();
      setMovies(result);
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchMovie = async (event) => {
    try {
      if (event.type === "click" || event.key === "Enter") {
        event.preventDefault();
        setLoading(true);
        const value = search.current.value;
        const result = await searchMovie(value);
        setMovies(result);
      }
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="bg-[#032541] flex flex-col lg:flex-row justify-between py-5 px-10 lg:items-center">
        <h1 className="text-center font-bold text-white text-4xl mb-5 lg:mb-0">
          THE MOVIE LIST
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Masukan judul"
            className="p-1 rounded w-full"
            ref={search}
            onKeyDown={handleSearchMovie}
          />
          <button
            className="absolute right-1 top-1 bg-white"
            onClick={handleSearchMovie}
          >
            <IoIosSearch size={25} />
          </button>
        </div>
      </header>
      <main>
        {loading ? (
          <Loading />
        ) : (
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
                  <p>Rating : {movie.vote_average.toFixed(1)}/10</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
