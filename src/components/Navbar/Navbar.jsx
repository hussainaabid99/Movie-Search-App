import './Navbar.css';

function Navbar() {

     return (
          <div className="navbar-wrapper">
               <div>Movie Base</div>
               <div className="search-bar">
                    <input
                         type="text"
                         placeholder="what movie are you thinking about ... "
                    />
               </div>
               <div>
                    Theme
               </div>
          </div>
     )

}

export default Navbar;