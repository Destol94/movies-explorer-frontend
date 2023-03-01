import './MoviesCard.css';
import inactiveCheckbox from '../../images/inactiveCheckbox.svg';
import TESTIMG from '../../images/pic2.jpg';

function MoviesCard(props) {
  return (
    <div className="MoviesCard">
      <div className="MoviesCard__info">
        <div className="MoviesCard__text">
          <p className="MoviesCard__name">{props.movie.nameRU}</p>
          <p className="MoviesCard__duration">{props.movie.duration}</p>
        </div>
        <button className="MoviesCard__btn">
          <img className="MoviesCard__btn_img" alt="" src={inactiveCheckbox} />
        </button>
      </div>
      <img className="MoviesCard__img" alt="" src={TESTIMG} />
    </div>
  )
}

export default MoviesCard;