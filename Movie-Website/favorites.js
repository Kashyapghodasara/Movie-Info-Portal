
const favoritesContainer = document.getElementById("favoritesContainer");
const emptyMessage = document.getElementById("emptyMessage");

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favoritesContainer.innerHTML = "";

    const favoriteMovies = favorites.filter(id => movies[id]);

    if (favoriteMovies.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    favoriteMovies.forEach(id => {
        const movie = movies[id];

        const card = document.createElement("div");
        card.className = "movie";

        card.innerHTML = `
            <img src="${moviePosters[id]}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p class="movie-info">${movie.year} | ⭐ ${movie.rating}</p>
            <p>${movie.story}</p>

            <div class="favorite-actions">
                <button onclick="window.location.href='movie.html?id=${id}'">
                    View Details
                </button>

                <button class="favorite-btn" data-id="${id}">
                    ❤️ Remove Favorite
                </button>
            </div>
        `;

        favoritesContainer.appendChild(card);
    });

    document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", () => {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            favorites = favorites.filter(id => id !== button.dataset.id);

            localStorage.setItem("favorites", JSON.stringify(favorites));

            displayFavorites();
        });
    });
}

displayFavorites();
