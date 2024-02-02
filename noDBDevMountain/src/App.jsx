import { useState } from "react";
import "./App.css";
import AllMovies from "./components/AllMovies";

function App({initialMovies}) {
  return <AllMovies initialMovies={initialMovies} />;
}

export default App;
