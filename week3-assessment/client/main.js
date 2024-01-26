const mainMovieDisplay = document.querySelector("#movieDisplay");

// Create functions to create the movie cards
const createMovieCard = (movieObj) => {
    const newMovieCard = document.createElement("section");
    newMovieCard.className = "movieCard";
    newMovieCard.innerHTML = `
        <img src="${movieObj.movieImg}"/>
        <h3>${movieObj.movieName}</h3>
    `;

    mainMovieDisplay.appendChild(newMovieCard);
}

const createAllMovieCards = (moviesArr) => {
    moviesArr.forEach((movie) => {
        createMovieCard({ movieName: movie.name, movieImg: movie.picture });
    });
}

// Axios
const loadAllMovies = () => {
    axios.get('/movies').then((res) => {
        createAllMovieCards(res.data.allMovies);
    });
}

const handleSubmit = (evt) => {
    evt.preventDefault();

    const movieName = document.getElementById("movieName");
    const movieImg = document.getElementById("movieImg");

    const newMovieObj = {
        movieName: movieName.value,
        movieImg: movieImg.value
    }

    mainMovieDisplay.innerHTML = "";
    movieName.value = "";
    movieImg.value = "";
    
    axios.post('/addMovie', newMovieObj).then((res) => {
        createAllMovieCards(res.data.allMovies);
    });
}

// Running code
const submitForm = document.querySelector("form");
submitForm.addEventListener("submit", handleSubmit);
loadAllMovies();