// import movies from "../docs/data-mockup.js" 

let movies = [
    {
        id: 0,
        title: "Revenge of the Sith",
        img: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
        description: "One of the best Star Wars movies",
        rating: 9
    },
    {
        id: 1,
        title: "A New Hope",
        img: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg",
        description: "The original Star Wars movie.",
        rating: 7
    },
    {
        id: 2,
        title: "Rogue One",
        img: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg",
        description: "The best Star Wars movie.",
        rating: 10
    }
]

let globalId = 4;

const handlerFunctions = {
    getAllMovies: (req, res) => {
        res.send({
            message: "Retrieved all movies",
            allMovies: movies
        })
    },

    addMovie: (req, res) => {
        const newMovieObj = {
            id: globalId,
            title: "",
            img: "",
            description: "",
            rating: 0
          }
      
          globalId++;
          movies.push(newMovieObj);

          res.send({
            message: "Added a new movie",
            newMovie: newMovieObj
          })
    },

    updateMovie: (req, res) => {
        const { id, title, img, description, rating } = req.body;

        const index = movies.findIndex((movie) => movie.id === +id);
        const updatingMovie = movies[index];

        updatingMovie.title = title;
        updatingMovie.img = img;
        updatingMovie.description = description;
        updatingMovie.rating = rating;

        res.send({
            message: "Updated movie",
            updatedMovie: updatingMovie
        })
    },

    deleteMovie: (req, res) => {
        const { id } = req.params;
        movies = movies.filter((movie) => movie.id !== +id);
        res.send({
            message: "Deleted movie",
            filteredMovies: movies
        })
    }
}

export default handlerFunctions;