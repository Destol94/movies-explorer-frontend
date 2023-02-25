import './MoviesCard.css';
import inactiveCheckbox from '../../images/inactiveCheckbox.svg';
import TESTIMG from '../../images/myPhoto.jpg';

function MoviesCard(props) {
  return (
    <div className="MoviesCard">
      <div className="MoviesCard__info">
        <div className="MoviesCard__text">
          <p className="MoviesCard__name">33 слова о дизайне</p>
          <p className="MoviesCard__duration">1ч 47м</p>
        </div>
        <button className="MoviesCard__btn"><img className="MoviesCard__btn_img" alt="" src={inactiveCheckbox}></img></button>
      </div>
      <img className="MoviesCard__img" alt="" src={TESTIMG} />
    </div>
  )
}

export default MoviesCard;