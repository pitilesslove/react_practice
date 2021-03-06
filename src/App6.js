import { useState, useEffect } from "react";

function App6() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 이런방법을 fetch를 사용할 수 있다.
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App6;
