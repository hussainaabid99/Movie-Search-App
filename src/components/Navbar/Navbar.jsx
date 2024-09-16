import { useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce.js';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

     const resultListRef = useRef(null);
     const [searchTerm, setSearchTerm] = useState('');
     const { movieList } = useMovieList(searchTerm);
     const navigator = useNavigate();

     function handleAutoCompleteClick(e, movieImdbId) {
          navigator(`/movie/${movieImdbId}`);
     }

     return (
          <div className="navbar-wrapper">
               <div className='movie-base-title'><Link to="/">Movie Base</Link></div>
               <div className="search-bar">
                    <input
                         id="movie-search-input"
                         type="text"
                         onFocus={() => {
                              resultListRef.current.style.display = 'block';
                         }}
                         onBlur={() => {
                              resultListRef.current.style.display = 'none';
                         }}
                         onChange={useDebounce((e) => {
                              setSearchTerm(e.target.value);
                         })}
                         placeholder="what movie are you thinking about ... "
                    />
                    <div id='result-list' ref={resultListRef}>
                         <div className="autocomplete-result">{searchTerm}</div>
                         {movieList.length > 0 &&
                              movieList.map(movie => (

                                   <div
                                        onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                                        className='autocomplete-result'
                                        key={movie.imdbID}
                                   >
                                        {movie.Title}
                                   </div>

                              ))}
                    </div>
               </div>

               <div>
                    Theme
               </div>
          </div>
     )

}

export default Navbar;