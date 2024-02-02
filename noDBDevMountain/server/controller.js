import movies from "../docs/data-mockup.js" 

const handlerFunctions = {
    getAllMovies: (req, res) => {

        res.send({
            message: "Retrieved all movies",
            allMovies: movies
        })
    }
}

export default handlerFunctions;