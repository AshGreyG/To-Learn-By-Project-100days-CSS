const searchConatiner = document.querySelector(".search-container");
const searchButton = document.querySelector(".btn");
const searchInput = document.querySelector(".input");

searchButton.addEventListener('click', () => {
  searchConatiner.classList.toggle("active");
  searchInput.focus();
});