import { Link, NavLink } from 'react-router-dom';
import manSilhouette from '../../images/manSilhouette.svg';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className={`NavBar ${props.isOpen && 'NavBar_open'}`}>
      <div className="NavBar__container">
        <nav className="NavBar__box-link" >
          <NavLink to="/" className={({isActive}) => `NavBar__link link ${isActive ? "NavBar__link_active" : ""}`}>Главная</NavLink>
          <NavLink to="/movies" className={({isActive}) => `NavBar__link link ${isActive ? "NavBar__link_active" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `NavBar__link link ${isActive ? "NavBar__link_active" : ""}`}>Сохранённые фильмы</NavLink>
        </nav>
        <Link to="/profile" className="NavBar__link link NavBar__link_account"><img className="" src={manSilhouette} alt="силуэт человечка" />Аккаунт</Link>
        <button type="button" className="NavBar__btn-close" onClick={props.closeNavBar}>
          <div className="NavBar__btn-close_piece" />
        </button>
      </div>
    </div>
  )
}

export default NavBar;