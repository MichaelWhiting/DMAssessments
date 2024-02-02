import { useState } from "react";
import MovieCell from "./MovieCell";

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
    const newMovieObj = {
      id: globalId,
      title: "",
      img: "",
      description: "",
      rating: 0
    }

    globalId++;
    setCurrentData([...currentData, newMovieObj]);
  }

  const deleteMovie = (id) => {
    let filteredMovies = currentData.filter((movie) => movie.id !== id);
    console.log(filteredMovies)
    setCurrentData(filteredMovies);
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
