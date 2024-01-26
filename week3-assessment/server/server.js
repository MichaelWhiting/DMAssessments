import express from "express";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("client"));
app.use(
  session({
    secret: "Thisisasupersecret",
    saveUninitialized: true,
    resave: false,
  })
);
// Above here is boiler plate code

import handlerFunctions from "./controller.js";

app.get('/movies', handlerFunctions.displayMovies);
app.post('/addMovie', handlerFunctions.addMovie);

// Starting up the server
app.listen("8887", () => {
    console.log("Server is now live at: http://localhost:8887");
});