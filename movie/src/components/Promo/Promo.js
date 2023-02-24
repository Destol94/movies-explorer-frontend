import './Promo.css';
import earth from '../../images/earth.svg';
import { Link } from 'react-scroll';

function Promo(props) {
  return (
    <div className="Promo">
      <div className="Promo__info">
        <div className="Promo__text-box">
          <h1 className="header-text">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
          <p className="Promo__explanations">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <Link className="Promo__link" smooth={true} to="AboutProject">Узнать больше</Link>
      </div>
      <img className="Promo__img" src={earth} alt="Планета Земля, где суша изображена концентрацией слова WEB" />
    </div>
  )
}
export default Promo;