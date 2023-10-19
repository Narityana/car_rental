import axios from 'axios';

// const fetch = require('node-fetch');

axios.defaults.baseURL = 'https://64be5da45ee688b6250c46d7.mockapi.io';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//   },
// };

export async function fetchCars() {
  const response = await axios.get('/adverts');
  return response.data;
}

// export async function fetchSerchMovie(query) {
//   const response = await axios.get(
//     `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
//     options
//   );
//   return response.data.results;
// }

// export async function fetchDetailsMovie(movieId) {
//   const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
//   return response.data;
// }

// export async function fetchCreditsMovie(movieId) {
//   const response = await axios.get(
//     `/movie/${movieId}/credits?language=en-US`,
//     options
//   );
//   return response.data;
// }

// export async function fetchRewiewsMovie(movieId) {
//   const response = await axios.get(
//     `/movie/${movieId}/reviews?language=en-US&page=1`,
//     options
//   );
//   return response.data.results;
// }
