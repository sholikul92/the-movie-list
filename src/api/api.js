const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY


export const getMovieList = async () => {
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`) 
    const movie = await response.json()

    return movie.results;
}

export const searchMovie = () => {
    return
}