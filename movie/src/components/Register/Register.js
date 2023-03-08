import RouteWithForm from '../RouteWithForm/RouteWithForm';
import './Register.css';

function Register(props) {
  const { name, email, password } = props.formWithValidation.values;
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
      onSubmit={formSubmit}
    >
      <label className="RouteWithForm__label">
        <p className="RouteWithForm__label-text">Имя</p>
        <input type="text" className="RouteWithForm__input" name="name" value={props.formWithValidation.value} onChange={props.formWithValidation.handleChange} required minLength="2" maxLength="50" />
        <span className="RouteWithForm__span-error">{props.formWithValidation.errors.name}</span>
      </label>
    </RouteWithForm>
  )
}

export default Register;