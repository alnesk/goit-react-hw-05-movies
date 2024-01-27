import axios from 'axios';

const API_KEY = '8687854402204dd37c43207d4b2de8e8';
const BASE_URL = 'https://www.themoviedb.org/settings/api';

export async function fetchTrendingFilm() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
}

export async function fetchFilmDetails(filmId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`
  );

  return response.data;
}

export async function fetchFilmCast(filmId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}`
  );

  return response.data;
}

export async function fetchFilmReviews(filmId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}`
  );

  return response.data;
}

export async function fetchSearchFilms(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );

  return response.data;
}
