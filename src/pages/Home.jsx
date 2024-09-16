//Components imports
import MovieCard from "../components/MovieCard/MovieCard";

//CSS imports
import './Home.css';
import useMovieList from "../hooks/useMovieList";


function Home() {

     const { movieList } = useMovieList('avengers', 'batman');

     return (
          <>
               <div className="movie-card-wrapper">

                    {movieList.map(movie => <MovieCard
                         key={movie.imdbID}
                         id={movie.imdbID}
                         {...movie}
                    />
                    )}
               </div>
          </>
     )

}

export default Home;