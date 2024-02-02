import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";
import handlerFunctions from "./controller.js";

// Express instance
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

// ROUTES/ENDPOINTS
app.get("/allMovies", handlerFunctions.getAllMovies);
app.post("/movies/add", handlerFunctions.addMovie);
app.put("/movies/update", handlerFunctions.updateMovie);
app.delete("/movies/delete/:id", handlerFunctions.deleteMovie);

// Starting up the server
const port = 9997;
ViteExpress.listen(app, port, () => console.log(`Server is running at: http://localhost:${port}`));