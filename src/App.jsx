import MovieList from "./components/movieList/MovieList";
import SearchInput from "./components/movieList/SearchInput";

const App = () => {
  return (
    <>
      <header className="bg-[#032541] flex flex-col lg:flex-row justify-between py-5 px-10 lg:items-center">
        <h1 className="text-center font-bold text-white text-4xl mb-5 lg:mb-0">THE MOVIE LIST</h1>
        <SearchInput />
      </header>
      <main>
        <MovieList />
      </main>
    </>
  );
};

export default App;
