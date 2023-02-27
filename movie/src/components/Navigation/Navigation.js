import './Navigation.css';
import manSilhouette from '../../images/manSilhouette.svg';
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className={`Navigation ${props.loggedIn && 'Navigation_vision'}`}>
      {props.loggedIn ?
        <>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_text-size ${isActive ? "Navigation__link_active" : ""}`}>Фильмы</NavLink>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_text-size Navigation__link_saved-films ${isActive ? "Navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_text-size Navigation__link_account ${isActive ? "Navigation__link_active" : ""}`}>
            <img className="" src={manSilhouette} alt="силуэт человечка" />
            Аккаунт
          </NavLink>
        </>
        :
        <>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_registration ${isActive ? "Navigation__link_active" : ""}`}>Регистрация</NavLink>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_login ${isActive ? "Navigation__link_active" : ""}`}>Войти</NavLink>
        </>
      }
    </nav>
  )
}
export default Navigation;