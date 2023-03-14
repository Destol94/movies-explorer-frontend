import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h3 className="Portfolio__header">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className="Portfolio__item">
          <Link to="https://destol94.github.io/how-to-learn/" target={'_blank'} className="Portfolio__link link">Статичный сайт</Link>
          <Link to="https://destol94.github.io/how-to-learn/" target={'_blank'} className="Portfolio__link link">&#8599;</Link>
        </li>
        <li className="Portfolio__item">
          <Link to="https://destol94.github.io/russian-travel/" target={'_blank'} className="Portfolio__link link">Адаптивный сайт</Link>
          <Link to="https://destol94.github.io/russian-travel/" target={'_blank'} className="Portfolio__link link">&#8599;</Link>
        </li>
        <li className="Portfolio__item">
          <Link to="https://project-mesto.nomoredomains.club/" target={'_blank'} className="Portfolio__link link">Одностраничное приложение</Link>
          <Link to="https://project-mesto.nomoredomains.club/" target={'_blank'} className="Portfolio__link link">&#8599;</Link>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;