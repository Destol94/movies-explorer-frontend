import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './RouteWithForm.css';
const inputs = document.querySelectorAll('RouteWithForm__input');
const spann = document.querySelector('.RouteWithForm__span-error');


function RouteWithForm(props) {
  
  function validInputs() {
    // console.log(inputs.validity.valid);

    // if (!inputs.every(input => input.validity.valid === true)) {
    //   spann.textContent = 'Что-то пошло не так...';
    // }
    // else {
    //   spann.textContent = '';
    // }
    inputs.forEach((input => {return input.validity.valid === true}));
  }
  const [email, setEmail] = useState('');
  function handleChandgeEmail(e) {
    setEmail(e.target.value);
    validInputs();
  }
  const [password, setPassword] = useState('');

  function handleChandgePassword(e) {
    setPassword(e.target.value);
    validInputs();
  }
  return (
    <div className="RouteWithForm">
      <Link to="/"><img src={logo} alt="Логотип" className="logo RouteWithForm__logo" /></Link>
      <p className="RouteWithForm__title">{props.textTitle}</p>
      <div className="RouteWithForm__box-form">
        {props.children}
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">E-mail</p>
          <input className="RouteWithForm__input" value={email} onChange={handleChandgeEmail} type="email" required />
        </label>
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">Пароль</p>
          <input type="password" className="RouteWithForm__input" value={password} onChange={handleChandgePassword} required />
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