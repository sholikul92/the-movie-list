/* eslint-disable react/prop-types */
import { searchMovie } from "../api/api";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch = ({ setLoading, setMovies }) => {
  const search = useRef();

  const handleSearchMovie = async (event) => {
    try {
      if (event.type === "click" || event.key === "Enter") {
        event.preventDefault();
        setLoading(true);
        const value = search.current.value;
        const result = await searchMovie(value);
        value.length > 0 ? setMovies(result) : null;
      }
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-5">
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
  );
};

export default InputSearch;
