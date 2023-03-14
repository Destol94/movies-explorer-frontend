import './Navigation.css';
import manSilhouette from '../../images/manSilhouette.svg';
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className={`Navigation ${props.loggedIn && 'Navigation_vision'}`}>
      {props.loggedIn ?
        <>
          <NavLink to="/movies" className={({isActive}) => `Navigation__link Navigation__link_text-size link ${isActive ? "Navigation__link_active" : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `Navigation__link Navigation__link_text-size link Navigation__link_saved-films ${isActive ? "Navigation__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => `Navigation__link Navigation__link_text-size link Navigation__link_account ${isActive ? "Navigation__link_active" : ""}`}>
            <img className="" src={manSilhouette} alt="силуэт человечка" />
            Аккаунт
          </NavLink>
        </>
        :
        <>
          <Link to="/signup" className="Navigation__link link Navigation__link_registration">Регистрация</Link>
          <Link to="/signin" className="Navigation__link link Navigation__link_login">Войти</Link>
        </>
      }
    </nav>
  )
}
export default Navigation;