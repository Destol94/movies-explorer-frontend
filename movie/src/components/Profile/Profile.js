import { useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../vendor/validationInputs/validationInputs';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import './Profile.css';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();
    props.setIsLoading(true);
    props.onSubmit(values.email, values.name);
    resetForm();
  }

  return (
    <div className="Profile">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <form className="Profile__data" onSubmit={handleSubmit}>
        <h1 className="Profile__name">Привет, {currentUser.name}!</h1>
        <div className="Profile__info-box">
          <label className="Profile__info-item">
            <p className="">Имя</p>
            <input className="Profile__input"
              name="name"
              value={values.name}
              onChange={handleChange}
              minLength="2" maxLength="40" required
              type="text"
              placeholder={currentUser.name}
            />
            <span className="Profile__span-error">{errors.name}</span>
          </label>
          <div className="line" />
          <label className="Profile__info-item">
            <p className="">E-mail</p>
            <input className="Profile__input"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              required
              placeholder={currentUser.email}
            />
            <span className="Profile__span-error">{errors.email}</span>
          </label>
        </div>
        {
          props.isLoading && <Preloader addedClass="Profile__preloader" />
        }
        <div className="Profile__button-box">
          <button type="submit"
            disabled={(currentUser.email === values.email && currentUser.name === values.name) || !isValid}
            className="Profile__btn Profile__btn_edit"
          >
            Редактировать
          </button>
          <button className="Profile__btn Profile__btn_logout" onClick={props.onLogout} >Выйти из аккаунта</button>
        </div>
      </form>
    </div>
  )
}

export default Profile;