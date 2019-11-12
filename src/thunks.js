import axios from 'axios';
import { setMostPopularMovies, setGenres, setGenreMovies, setLikedMovies, setLogs } from './actions';
import { endpoints } from './config';

export const getMostPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((data) => {
      dispatch(setMostPopularMovies(data.data.results));
    });
};

export const getGenres = () => (dispatch) => {
  axios
    .get(endpoints.genres())
    .then((data) => {
      dispatch(setGenres(data.data.genres));
    });
};

export const getGenreMovies = (genreId) => (dispatch) => {
  if (genreId === '-1')
  {
    axios
    .get(endpoints.mostPopularMovies())
    .then((data) => {
      dispatch(setGenreMovies(data.data.results));
    });
  }
  else
  {
    axios
    .get(endpoints.genreMovies(genreId))
    .then((data) => {
      dispatch(setGenreMovies(data.data.results));
    });
  }
};

export const getLikedMovies = (movieId, likedMovies) => (dispatch) => {
  var likedMoviesArray = likedMovies;
  var index = likedMoviesArray.indexOf(movieId); 
  if (index > -1)
  {
      likedMoviesArray.splice(index, 1);
  }
  else
  {
      likedMoviesArray.push(movieId);
  }
  dispatch(setLikedMovies(movieId, likedMoviesArray));
};

export const getLogs = (message, logs) => (dispatch) => {
  var logsArray = logs;
  logsArray.push(message);
  dispatch(setLogs(message, logsArray));
};
