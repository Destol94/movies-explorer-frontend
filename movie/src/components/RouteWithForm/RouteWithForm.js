import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './RouteWithForm.css';


function RouteWithForm(props) {
  return (
    <form className="RouteWithForm" onSubmit={props.onSubmit}>
      <Link to="/" className="RouteWithForm__link">
        <img src={logo} alt="Логотип" className="logo RouteWithForm__logo" />
      </Link>
      <p className="RouteWithForm__title">{props.textTitle}</p>
      <div className="RouteWithForm__box-form">
        {props.children}
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">E-mail</p>
          <input className="RouteWithForm__input" value={props.email} name="email" onChange={e=> props.formWithValidation.handleChangeEmail(e, props.setInputValue)} type="email" required />
          <span className="RouteWithForm__span-error">{props.formWithValidation.errors.email}</span>
        </label>
        <label className="RouteWithForm__label">
          <p className="RouteWithForm__label-text">Пароль</p>
          <input type="password" className="RouteWithForm__input" name="password" value={props.formWithValidation.value} onChange={props.formWithValidation.handleChange} required />
          <span className="RouteWithForm__span-error">{props.formWithValidation.errors.password}</span>
        </label>
      </div>
      <button type="submit" disabled={!props.formWithValidation.isValid} className="RouteWithForm__btn-submit">{props.textBtn}</button>
      <div className="RouteWithForm__box-switch">
        <p className="RouteWithForm__box-switch_text">{props.textLink}</p>
        <Link to={props.link} className="RouteWithForm__box_link link">{props.nameLink}</Link>
      </div>
    </form>
  )
}

export default RouteWithForm;