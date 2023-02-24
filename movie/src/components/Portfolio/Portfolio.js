import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h3 className="Portfolio__header">Портфолио</h3>
      <ul className="Portfolio__list">
        <li className="Portfolio__item">
          <Link className="Portfolio__link link">Одностраничный сайт</Link>
          <Link className="Portfolio__link link">&#8599;</Link>
        </li>
        <li className="Portfolio__item">
          <Link className="Portfolio__link link">Адаптивный сайт</Link>
          <Link className="Portfolio__link link">&#8599;</Link>
        </li>
        <li className="Portfolio__item">
          <Link className="Portfolio__link link">Одностраничное приложение</Link>
          <Link className="Portfolio__link link">&#8599;</Link>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;