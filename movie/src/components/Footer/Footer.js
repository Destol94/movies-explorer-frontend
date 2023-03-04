import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <p className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="line" />
      <div className="Footer__signature">
        <p className="Footer__year">&#169; 2023</p>
        <ul className="Footer__links">
          <li className="Footer__link">
            <Link to="https://practicum.yandex.ru/" target={'_blank'} className="link">
              Яндекс.Практикум
            </Link>
          </li>
          <li className="Footer__link link">
            <Link to="https://github.com/Destol94" target={'_blank'} className="link">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;