const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async () => {
  const response = await fetch(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  const movies = await response.json();

  return movies.results;
};

export const searchMovie = async (q) => {
  const response = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&page=1&query=${q}`
  );
  const movies = await response.json();

  return movies.results;
};
