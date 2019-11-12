import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfSelectedGenre = {
  selectedGenre: '-1',
};

const selectedGenreState = (state = initialStateOfSelectedGenre, action) => {
  switch (action.type) {
    case 'toggleGenre': return {
      ...state,
      selectedGenre: action.payload,
    };
    default: return state;
  }
};

const initialStateOfLogs = {
  message: "",
  logs: [],
};

const logsState = (state = initialStateOfLogs, action) => {
  switch (action.type) {
    case 'setLogs': return {
      ...state,
      message: action.payload,
      logs: action.list,
    };
    default: return state;
  }
};

const initialStateOfHearted = {
  hearted: '-1',
  heartedMovies: [],
};

const heartedState = (state = initialStateOfHearted, action) => {
  switch (action.type) {
    case 'setLikedMovies': return {
      ...state,
      hearted: action.payload,
      heartedMovies: action.list,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
    };
    default: return state;
  }
};

const initialStateOfGenres = {
  genres: [],
};

const genres = (state = initialStateOfGenres, action) => {
  switch (action.type) {
    case 'setGenres': return {
      ...state,
      genres: action.list,
    };
    default: return state;
  }
};

const initialStateOfGenreMovies = {
  genreMovies: [],
};

const genreMovies = (state = initialStateOfGenreMovies, action) => {
  switch (action.type) {
    case 'setGenreMovies': return {
      ...state,
      genreMovies: action.list,
    };
    default: return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  selectedGenreState,
  logsState,
  heartedState,
  cards,
  genres,
  genreMovies,
});
