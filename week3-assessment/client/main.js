const mainMovieDisplay = document.querySelector("#movieDisplay");

// Create functions to create the movie cards
const createMovieCard = (movieObj) => {
    const newMovieCard = document.createElement("section");
    newMovieCard.className = "movie-card";
    newMovieCard.innerHTML = `
        <img src="${movieObj.picture}"/>
        <h3>${movieObj.name}</h3>

        <section>
            <button onclick="updateMovie(${movieObj.id}, 'downvote')">-</button>
            Rating:
            <button onclick="updateMovie(${movieObj.id}, 'upvote')">+</button>
            <br/>
            <p id="rating">${movieObj.votes} / 10</p>
        </section>
        <br/>

        <button onclick="deleteMovie(${movieObj.id})">Delete Me</button>
    `;

    mainMovieDisplay.appendChild(newMovieCard);
}

const createAllMovieCards = (moviesArr) => {
    moviesArr.forEach((movie) => {
        createMovieCard(movie);
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
        "movieName": movieName.value,
        "movieImg": movieImg.value
    }

    mainMovieDisplay.innerHTML = "";
    movieName.value = "";
    movieImg.value = "";
    
    axios.post('/addMovie', newMovieObj).then((res) => {
        createAllMovieCards(res.data.allMovies);
    });
}

const deleteMovie = (id) => {
    axios.delete(`/deleteMovie/${id}`).then((res) => {
        mainMovieDisplay.innerHTML = "";
        createAllMovieCards(res.data.allMovies);
    });
}

const updateMovie = (id, type) => {
    axios.put(`/updateMovie/${id}`, { "voteType": type}).then((res) => {
        mainMovieDisplay.innerHTML = "";
        createAllMovieCards(res.data.allMovies);
    });
}

// Running code
const submitForm = document.querySelector("form");
submitForm.addEventListener("submit", handleSubmit);
loadAllMovies();