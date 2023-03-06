import RouteWithForm from "../RouteWithForm/RouteWithForm";

function Login(props) {
  return (
    <RouteWithForm link="/signup"
    formWithValidation={props.formWithValidation}
      nameLink="Регистрация"
      textLink="Ещё не зарегистрированы?"
      textBtn="Войти"
      textTitle="Рады видеть!"
    >
    </RouteWithForm>
  )
}

export default Login;