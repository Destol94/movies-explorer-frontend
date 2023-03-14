import RouteWithForm from "../RouteWithForm/RouteWithForm";

function Login(props) {
  const { email, password } = props.formWithValidation.values;
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
      onSubmit={formSubmit}
    >
    </RouteWithForm>
  )
}

export default Login;