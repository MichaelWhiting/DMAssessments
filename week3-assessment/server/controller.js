import movies from './db.json' assert {type: 'json'}

let globalId = 7;

const handlerFunctions = {
    displayMovies: (req, res) => {
        res.send({
            message: "Now displaying movies!",
            allMovies: movies
        });
    },

    addMovie: (req, res) => {
        const movieName = req.body.movieName;
        const movieImg = req.body.movieImg

        const newMovieObj = {
            id: globalId,
            name: movieName,
            picture: movieImg,
            votes: 0
        }

        movies.push(newMovieObj);

        globalId++;

        res.send({
            message: "Added movie!",
            allMovies: movies
        });
        
    }
};

export default handlerFunctions;