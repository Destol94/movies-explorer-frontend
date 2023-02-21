import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="Navigation">
      {props.loggedIn ?
        <>
          <NavLink className={(isActive) => `Navigation__link ${isActive ? "Navigation__link_active" : ""}`}>Фильмы</NavLink>
          <NavLink className={(isActive) => `Navigation__link ${isActive ? "Navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>
          <NavLink className={(isActive) => `Navigation__link ${isActive ? "Navigation__link_active" : ""}`}>Аккаунт</NavLink>
        </>
        :
        <>
          <NavLink className={(isActive) => `Navigation__link ${isActive ? "Navigation__link_active" : ""}`}>Регистрация</NavLink>
          <NavLink className={(isActive) => `Navigation__link Navigation__link_login ${isActive ? "Navigation__link_active" : ""}`}>Войти</NavLink>
        </>
      }
    </nav>
  )
}
export default Navigation;