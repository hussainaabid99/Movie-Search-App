import { useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce.js';

function Navbar() {

     const resultListRef = useRef(null);
     const [searchTerm, setSearchTerm] = useState('');
     const { movieList } = useMovieList(searchTerm);

     return (
          <div className="navbar-wrapper">
               <div>Movie Base</div>
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
                              movieList.map(movie => <div className='autocomplete-result' key={movie.imdbId}>{movie.Title}</div>
                              )}
                    </div>
               </div>

               <div>
                    Theme
               </div>
          </div>
     )

}

export default Navbar;