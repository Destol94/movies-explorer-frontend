import './MoviesCard.css';
import TESTIMG from '../../images/pic2.jpg';
import { useState } from 'react';

function MoviesCard(props) {
  const [checkbox, setCheckbox] = useState(false);
  function handleChandgeBtn() {
    setCheckbox(!checkbox);
  }
  function deleteMovie() {
    console.log('фильм удалён :)')
  }
  const btnSaveMovieClassName = (`${checkbox && 'MoviesCard__btn_active'}`);

  return (
    <div className="MoviesCard">
      <div className="MoviesCard__info">
        <div className="MoviesCard__text">
          <p className="MoviesCard__name">{props.movie.nameRU}</p>
          <p className="MoviesCard__duration">{props.movie.duration}</p>
        </div>
        <button onClick={props.saveMovie ? deleteMovie : handleChandgeBtn } className={`${props.saveMovie ? 'MoviesCard__btn_cross' : btnSaveMovieClassName} MoviesCard__btn`} />
      </div>
      <img className="MoviesCard__img" alt="картинка к фильму" src={props.movie.image.url} />
    </div>
  )
}

export default MoviesCard;