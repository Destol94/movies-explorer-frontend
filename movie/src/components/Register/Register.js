import { useState } from 'react';
import RouteWithForm from '../RouteWithForm/RouteWithForm';
import './Register.css';

function Register(props) {
  const { password } = props.formWithValidation.values;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    props.onRegistration(name, email, password);
  }

  return (
    <RouteWithForm link="/signin"
      formWithValidation={props.formWithValidation}
      nameLink="Войти"
      textLink="Уже зарегистрированы?"
      textBtn="Зарегистрироваться"
      textTitle="Добро пожаловать!"
      valueName={name}
      setValueName={setName}
      valueEmail={email}
      setInputValue={setEmail}
      onSubmit={formSubmit}
      isNotificationPlateState={props.isNotificationPlateState}
      onCloseAlertNotification={props.onCloseAlertNotification}
    >
      <label className="RouteWithForm__label">
        <p className="RouteWithForm__label-text">Имя</p>
        <input type="text" className="RouteWithForm__input"
          name="name"
          value={name}
          onChange={e=>props.formWithValidation.handleChangeName(e, setName)}
          required minLength="2" maxLength="50" pattern="[ еЁA-zА-я]{2,50}"
        />
        <span className="RouteWithForm__span-error">{props.formWithValidation.errors.name}</span>
      </label>
    </RouteWithForm>
  )
}

export default Register;