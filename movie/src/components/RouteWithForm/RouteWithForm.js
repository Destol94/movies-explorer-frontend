import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './RouteWithForm.css';

function RouteWithForm(props) {
  return (
    <div className="RouteWithForm">
      <Link to="/"><img src={logo} alt="Логотип" className="logo RouteWithForm__logo" /></Link>
      <p className="RouteWithForm__title">{props.title}align-items: flex-start;</p>
      <div className="RouteWithForm__box-form">
        {props.children}
        <span className="RouteWithForm__span-error">RouteWithForm__span-error</span>
      </div>
      <button type="submit" className="RouteWithForm__btn-submit">ryjgrf</button>
      <div className="RouteWithForm__box-switch">
        <p className="RouteWithForm__box-switch_text">{props.textBTN}Уже зарегистрированы?</p>
        <Link to={props.link} className="RouteWithForm__box_link link">{props.textLink}Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default RouteWithForm;