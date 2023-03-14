import { useState } from "react";
import RouteWithForm from "../RouteWithForm/RouteWithForm";

function Login(props) {
  const { password } = props.formWithValidation.values;
  const [email, setEmail] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  }
  return (
    <RouteWithForm link="/signup"
      formWithValidation={props.formWithValidation}
      nameLink="Регистрация"
      textLink="Ещё не зарегистрированы?"
      textBtn="Войти"
      textTitle="Рады видеть!"
      valueEmail={email}
      setInputValue={setEmail}
      onSubmit={formSubmit}
    >
    </RouteWithForm>
  )
}

export default Login;