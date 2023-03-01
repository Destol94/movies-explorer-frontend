import { useState } from 'react';
import validInputs from '../../vendor/validationInputs/validationInputs';
import RouteWithForm from '../RouteWithForm/RouteWithForm';
import './Register.css';

function Register() {

  const [name, setName] = useState('');
  function handleChangeName(e) {
    setName(e.target.value);
    validInputs();
  }
  return (
    <RouteWithForm link="/signin"
      nameLink="Войти"
      textLink="Уже зарегистрированы?"
      textBtn="Зарегистрироваться"
      textTitle="Добро пожаловать!"
    >
      <label className="RouteWithForm__label">
        <p className="RouteWithForm__label-text">Имя</p>
        <input type="text" className="RouteWithForm__input" value={name} onChange={handleChangeName} required minLength="2" maxLength="50" />
      </label>
    </RouteWithForm>
  )
}

export default Register;