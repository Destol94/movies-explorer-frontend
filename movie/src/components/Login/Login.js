import RouteWithForm from "../RouteWithForm/RouteWithForm";

function Login() {
  return (
    <RouteWithForm link="/signup"
      nameLink="Регистрация"
      textLink="Ещё не зарегистрированы?"
      textBtn="Войти"
      textTitle="Рады видеть!"
    >
    </RouteWithForm>
  )
}

export default Login;