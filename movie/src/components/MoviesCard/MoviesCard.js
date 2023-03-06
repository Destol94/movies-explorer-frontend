import './MoviesCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MoviesCard(props) {
  const [checkbox, setCheckbox] = useState(false);
  function handleChandgeBtn() {
    setCheckbox(!checkbox);
  }
  function deleteMovie() {
    console.log('фильм удалён :)')
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
        <button onClick={props.saveMovie ? deleteMovie : handleChandgeBtn} className={`${props.saveMovie ? 'MoviesCard__btn_cross' : btnSaveMovieClassName} MoviesCard__btn`} />
      </div>
      <Link className="MoviesCard__link-trailer" to={props.movie.trailerLink} target="_blank">
        <img className="MoviesCard__img" alt="картинка к фильму" src={`https://api.nomoreparties.co/${props.movie.image.url}`} />
      </Link>
    </div>
  )
}

export default MoviesCard;