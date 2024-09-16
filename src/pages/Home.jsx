import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

//Components imports
import MovieCard from "../components/MovieCard/MovieCard";

//CSS imports
import './Home.css';

function Home() {

     const [movieList, setMovieList] = useState([]);

     async function downloadDefaultMovies(...args) {
          const urls = args.map((name) => searchMovie(name));
          const response = await axios.all(urls.map(url => axios.get(url)));    //parellel movie requests
          const movies = response.map((movieResponse) => movieResponse.data.Search);
          setMovieList([].concat(...movies));
     }

     useEffect(() => {
          downloadDefaultMovies('harry', 'avengers', 'batman');
     }), [];

     return (
          <>
               <div className="movie-card-wrapper">

                    {movieList.map(movie => <MovieCard
                         key={movie.imdbId}
                         {...movie}
                    />
                    )}
               </div>
          </>
     )

}

export default Home;