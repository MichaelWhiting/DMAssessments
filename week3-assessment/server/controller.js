import movies from './db.json' assert {type: 'json'}

let globalId = 6;

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
            "id": globalId,
            "name": movieName,
            "picture": movieImg,
            "votes": 0
        }

        globalId++;
        movies.push(newMovieObj);

        res.send({
            message: "Added movie!",
            allMovies: movies
        });
    },

    deleteMovie: (req, res) => {
        const movieId = req.params.id;

        for (let i = 0; i < movies.length; i++) {
            //remember to change to number
            if (movies[i].id === +movieId) {
                movies.splice(i, 1);
                break;
            }
        }

        res.send({
            message: "Movie has been deleted",
            allMovies: movies
        });
    },

    updateMovie: (req, res) => {
        const movieId = req.params.id;
        const voteType = req.body.voteType;

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === +movieId) {
                if (voteType === "upvote") {
                    movies[i].votes += 1
                } else if (voteType === "downvote") {
                    movies[i].votes -= 1
                }
            }
        }

        res.send({
            message: "Updated the vote counter",
            allMovies: movies
        })
    }
};

export default handlerFunctions;