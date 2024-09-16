import { useRef } from 'react';
import './Navbar.css';

function Navbar() {

     const resultListRef = useRef(null);


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
                         placeholder="what movie are you thinking about ... "
                    />
                    <div id='result-list' ref={resultListRef}>
                         <div className='autocomplete-result'>result 1</div>
                         <div className='autocomplete-result'>result 2</div>
                         <div className='autocomplete-result'>result 3</div>
                    </div>
               </div>

               <div>
                    Theme
               </div>
          </div>
     )

}

export default Navbar;