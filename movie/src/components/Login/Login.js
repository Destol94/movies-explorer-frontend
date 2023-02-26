import RouteWithForm from "../RouteWithForm/RouteWithForm";

function Login() {
  return (
    <RouteWithForm >
      <label className="RouteWithForm__label">
        <p className="RouteWithForm__label-text">E-mail</p>
        <input type="text" className="RouteWithForm__input" />
      </label>
      <label className="RouteWithForm__label">
        <p className="RouteWithForm__label-text">Пароль</p>
        <input type="password" className="RouteWithForm__input" />
      </label>
    </RouteWithForm>
  )
}

export default Login;