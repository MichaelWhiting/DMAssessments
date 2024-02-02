import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

axios.get("/allMovies").then((res) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialMovies={res.data.allMovies}/>
    </React.StrictMode>,
  )
})
.catch((err) => console.log(err));
