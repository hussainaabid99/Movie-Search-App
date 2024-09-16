import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import Error from "../pages/Error.jsx";

function MainRoutes() {

     return (
          <Routes>
               {/* Routes contain multiple route */}
               <Route path='/' element={<Home />} />
               <Route path='/movie/:id' element={<MovieDetails />} />
               <Route path='*' element={<Error />} />
          </Routes>
     )
}

export default MainRoutes;