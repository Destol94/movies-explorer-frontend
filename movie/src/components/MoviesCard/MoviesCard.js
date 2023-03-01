import './MoviesCard.css';
import inactiveCheckbox from '../../images/inactiveCheckbox.svg';
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
      <img className="MoviesCard__img" alt="" src={TESTIMG} />
    </div>
  )
}

export default MoviesCard;