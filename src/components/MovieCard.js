import React from "react";
import { addFavourtie } from "../actions";

class MovieCard extends React.Component {

  handleFavouriteClick = () =>{
    const {movie} = this.props;
    this.props.dispatch(addFavourtie(movie))
  }  

  handleUnFavouriteClick = () => {

  }

  render() {
    const {movie, isFavourite} = this.props
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="rating">{movie.imdbRating}</div>
          {isFavourite ? (
            <button
              className="unfavourite-btn"
              onClick={this.handleUnFavouriteClick}
            >
              Unfavourite
            </button>
          ) : (
            <button
              className="favourite-btn"
              onClick={this.handleFavouriteClick}
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default MovieCard;
