import React from 'react';
import { connect } from 'react-redux';
import { toggleCards, toggleGenre } from '../actions';
import { getMostPopularMovies, getGenres, getGenreMovies, getLikedMovies, getLogs } from '../thunks';
import Card from './Card';
import { getImageUrl } from '../config';

var date = new Date();

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMostPopularMovies();
    this.props.onGetGenres();
    this.props.onGetLogs(
      date.getFullYear() + '-' + 
      date.getMonth() + '-' + 
      date.getDate() + ' ' + 
      date.getHours() + ':' + 
      date.getMinutes() + ':' + 
      date.getSeconds() + ': Aplikacija uzkrauta', this.props.logs);
  }

  render() {
    return (
      <div className="container">
        <h1 style={{margin : '20px'}}>Genres</h1>
        <select style={{margin : '20px'}} value={this.props.selectedGenre} onChange={(e) => { 
          date = new Date(); 
          this.props.onToggleGenre(e.target.value); 
          this.props.onGetLogs(
            date.getFullYear() + '-' + 
            date.getMonth() + '-' + 
            date.getDate() + ' ' + 
            date.getHours() + ':' + 
            date.getMinutes() + ':' + 
            date.getSeconds() + ': Pakeistas zanras i ' + 
            e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text, this.props.logs) }}>
          <option value="-1">Most Popular</option>
          {this.props.genres.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <br />
        <header>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>

        {!this.props.showCards 
          ? null 
          : this.props.genreMovies.length > 0 
          ? (
            <div className="cards">
              {this.props.genreMovies.map((card) => (
                <Card
                  key={card.id}
                  backgroundImage={getImageUrl(card.backdrop_path)}
                  date={card.release_date}
                  rating={card.vote_average}
                  votes={card.vote_count}
                  description={card.overview}
                  title={card.original_title}
                  id={card.id}
                  pushLikedMovieId={this.props.onGetLikedMovies}
                  pushMovieHeartToLog={this.props.onGetLogs}
                  likedMovies={this.props.hearted}
                  logs={this.props.logs}
                  isLiked={this.props.hearted.indexOf(card.id) > -1 ? true : false}
                />
              ))}
            </div>
          )
          : (
            <div className="cards">
              {this.props.mostPopularMovies.map((card) => (
                <Card
                  key={card.id}
                  backgroundImage={getImageUrl(card.backdrop_path)}
                  date={card.release_date}
                  rating={card.vote_average}
                  votes={card.vote_count}
                  description={card.overview}
                  title={card.original_title}
                  id={card.id}
                  pushLikedMovieId={this.props.onGetLikedMovies}
                  pushMovieHeartToLog={this.props.onGetLogs}
                  likedMovies={this.props.hearted}
                  logs={this.props.logs}
                  isLiked={this.props.hearted.indexOf(card.id) > -1 ? true : false}
                />
              ))}
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  selectedGenre: state.selectedGenreState.selectedGenre,
  logs: state.logsState.logs,
  mostPopularMovies: state.cards.mostPopular,
  genres: state.genres.genres,
  genreMovies: state.genreMovies.genreMovies,
  hearted: state.heartedState.heartedMovies,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  onGetGenres: () => dispatch(getGenres()),
  onGetLogs: (message, logs) => dispatch(getLogs(message, logs)),
  onToggleGenre: (genreId) => {
    dispatch(toggleGenre(genreId));
    dispatch(getGenreMovies(genreId));
  },
  onGetLikedMovies: (movieId, heartedMovies) => {
    dispatch(toggleCards(false));
    dispatch(getLikedMovies(movieId, heartedMovies));
    dispatch(toggleCards(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
