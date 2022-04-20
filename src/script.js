import movies from './assets/movies.json'

/*
1. Удалить статичную верстку в html
и реализовать отрисовку фильмов
из массива movies
 
2. Поиск должен работать следующим образом:
- Если он пустой выводятся все фильмы.
- Если вбили текст, выводятся фильмы, названия
которых содержит введенный текст
*/
const movieListTag = document.querySelector(".movie-list")
const searchInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

function createMovie(movieData) {

  const articleTag = document.createElement("article");
  articleTag.classList.add("movie");

  const img = document.createElement("img");
  img.classList.add("movie__poster");
  img.src = movieData.poster

  const titleTag = document.createElement("h1")
  titleTag.textContent = movieData.title

  articleTag.append(img, titleTag)

  return articleTag
}

movies.forEach((movie) => {
  movieListTag.append(createMovie(movie))
});

searchInput.oninput = () => {
  movieListTag.innerHTML = "";
  movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.value.toLowerCase())
    )
    .forEach((movie) => {
      movieListTag.append(createMovie(movie));
    });
};