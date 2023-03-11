import './MoviesCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MoviesCard(props) {
  const savedMovie = props.fullSaveMovieList ? props.fullSaveMovieList.find(item => { return props.movie.id === item.movieId }) : '';
  const [checkbox, setCheckbox] = useState(savedMovie);
  function handleChandgeBtn() {
    if (savedMovie) {
      props.handleDeleteMovie(savedMovie._id, setCheckbox);
    }
    else props.handleSaveMovie(props.movie, setCheckbox);
  }
  function deleteMovie() {
    props.handleDeleteMovie(props.movie._id);
  }
  const btnSaveMovieClassName = (`${checkbox && 'MoviesCard__btn_active'}`);

  const hour = props.movie.duration > 60 ? Math.trunc(props.movie.duration / 60) : '';
  const minutes = props.movie.duration > 60 ? props.movie.duration % 60 : props.movie.duration;
  return (
    <div className="MoviesCard">
      <div className="MoviesCard__info">
        <div className="MoviesCard__text">
          <p className="MoviesCard__name">{props.movie.nameRU}</p>
          <p className="MoviesCard__duration">{`${hour && `${hour}ч`} ${minutes}м`}</p>
        </div>
        {
          props.isSaveMovie ?
            <button onClick={deleteMovie} className="MoviesCard__btn_cross MoviesCard__btn" />
            :
            <button onClick={handleChandgeBtn} className={`${btnSaveMovieClassName} MoviesCard__btn`} />
        }
      </div>
      <Link className="MoviesCard__link-trailer" to={props.movie.trailerLink} target="_blank">
        <img className="MoviesCard__img" alt="картинка к фильму" src={`${props.isSaveMovie ? props.movie.image : `https://api.nomoreparties.co/${props.movie.image.url}`}`} />
      </Link>
    </div>
  )
}

export default MoviesCard;