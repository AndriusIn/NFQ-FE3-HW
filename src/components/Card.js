import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
    };
  }

  render() {
    const { showDescription } = this.state;
    const { title, backgroundImage, date, rating, votes, description, isLiked } = this.props;
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like" onClick={() => { 
            var date = new Date(); 
            var heartState = isLiked ? 'Nuimta' : 'Uzdeta';
            this.props.pushLikedMovieId(this.props.id, this.props.likedMovies); 
            this.props.pushMovieHeartToLog(
              date.getFullYear() + '-' + 
              date.getMonth() + '-' + 
              date.getDate() + ' ' + 
              date.getHours() + ':' + 
              date.getMinutes() + ':' + 
              date.getSeconds() + ': ' + heartState + ' sirdele filmui ' + title, this.props.logs) }}>
            {isLiked ? (<i className="fa fa-heart" />) : (<i className="fa fa-heart-o" />)}
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}
