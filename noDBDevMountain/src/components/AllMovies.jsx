import { useState } from "react";
import MovieCell from "./MovieCell";
import axios from "axios";

let globalId = 4;

function AllMovies({ initialMovies }) {
  const [currentData, setCurrentData] = useState(initialMovies);
  
  const movieCells = currentData.map((movie) => {
    return (
      <MovieCell 
        key={movie.id} 
        movieData={movie} 
        deleteMovie={() => deleteMovie(movie.id)} 
       />
      )
  });
  
  const addMovie = () => {
    axios.post("/movies/add").then((res) => {
      const newMovie = res.data.newMovie;
      setCurrentData([...currentData, newMovie]);
    })
  }

  const deleteMovie = (id) => {
    axios.delete(`/movies/delete/${id}`).then((res) => {
      const filteredMovies = res.data.filteredMovies;
      setCurrentData(filteredMovies);
    })
  };
  
  return (
    <div className="all-movies">
      <button onClick={addMovie}>Add Movie</button>
      <br/>
      {movieCells}
    </div>
  )
}

export default AllMovies;
