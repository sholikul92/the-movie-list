import { useState, useEffect } from "react";
import { getMovieList } from "./api/api";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import ListMovie from "./components/ListMovie";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <Header>
        <InputSearch setLoading={setLoading} setMovies={setMovies}/>
      </Header>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <section className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 lg:m-10 m-5">
            {movies.length > 0 &&
              movies.map((movie) => <ListMovie key={movie.id} movie={movie} />)}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
