//////////////////////////////////////////////////////////////////////////////////////
//TF 13-15
// Library Button
document.addEventListener('DOMContentLoaded', function() {
    const libraryButton = document.querySelector('.header-link.libr');

    libraryButton.addEventListener('click', function() {
        const mainElement = document.getElementById('main');
        mainElement.removeAttribute('id');
    });
});

function createMovieElement(movieTitle) {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
        <h3>${movieTitle}</h3>
        <button onclick="removeFromLibrary('${movieTitle}', 'watched')">Remove from Watched</button>
        <button onclick="removeFromLibrary('${movieTitle}', 'queue')">Remove from Queue</button>
    `;
    return movieEl;
}

function removeFromLibrary(movieTitle, listType) {
    let list = JSON.parse(localStorage.getItem(`movie-${listType}`)) || [];
    list = list.filter(title => title !== movieTitle);
    localStorage.setItem(`movie-${listType}`, JSON.stringify(list));
    // Refresh the displayed list
    if (listType === 'watched') {
        displayWatchedMovies();
    } else {
        displayQueue();
    }
}

// Watched and Queue Movie Buttons
const watchedButton = document.getElementById('watched-btn');
const queueButton = document.getElementById('queue-btn');

// Add event listeners to the buttons
watchedButton.addEventListener('click', displayWatchedMovies);
queueButton.addEventListener('click', displayQueue);

// Function to display watched movies
function displayWatchedMovies() {
    const watchedMovies = JSON.parse(localStorage.getItem('movie-watched')) || [];

    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    watchedMovies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        moviesContainer.appendChild(movieElement);
    });
}

// Function to display queue movies
function displayQueue() {
    const queueMovies = JSON.parse(localStorage.getItem('movie-queue')) || [];

    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    queueMovies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        moviesContainer.appendChild(movieElement);
    });
}
