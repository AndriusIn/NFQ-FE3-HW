export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const toggleGenre = (genreId) => ({
  type: 'toggleGenre',
  payload: genreId,
});

export const setLikedMovies = (movieId, list) => ({
  type: 'setLikedMovies',
  payload: movieId,
  list,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setGenres = (list) => ({
  type: 'setGenres',
  list,
});

export const setGenreMovies = (list) => ({
  type: 'setGenreMovies',
  list,
});

export const setLogs = (message, list) => ({
  type: 'setLogs',
  payload: message,
  list,
});
