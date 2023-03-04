import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import validInputs from '../../vendor/validationInputs/validationInputs';
import './RouteWithForm.css';


function RouteWithForm(props) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChandgeInput(e, setInput) {
    setInput(e.target.value);
    validInputs();
  }
  return (
    <div className="RouteWithForm">
      <Link to="/" className="RouteWithForm__link"><img src={logo} alt="Логотип" className="logo RouteWithForm__logo" /></Link>
      <p className="RouteWithForm__title">{props.textTitle}</p>
      <div className="RouteWithForm__box-form">
        {props.children}
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">E-mail</p>
          <input className="RouteWithForm__input" value={email} onChange={(e)=>handleChandgeInput(e, setEmail)} type="email" required />
        </label>
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">Пароль</p>
          <input type="password" className="RouteWithForm__input" value={password} onChange={(e)=>handleChandgeInput(e, setPassword)} required />
        </label>
        <span className="RouteWithForm__span-error"></span>
      </div>
      <button type="submit" className="RouteWithForm__btn-submit">{props.textBtn}</button>
      <div className="RouteWithForm__box-switch">
        <p className="RouteWithForm__box-switch_text">{props.textLink}</p>
        <Link to={props.link} className="RouteWithForm__box_link link">{props.nameLink}</Link>
      </div>
    </div>
  )
}

export default RouteWithForm;