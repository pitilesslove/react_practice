import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {


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
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        ></Movie>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;
