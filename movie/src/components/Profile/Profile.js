import Header from '../Header/Header';
import './Profile.css';

function Profile(props) {
  return (
    <div className="Profile">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <div className="Profile__data" >
        <h1 className="Profile__name">Привет, {props.name}!</h1>
        <div className="Profile__info-box">
          <div className="Profile__info-item">
            <p className="">Имя</p>
            <p className="">{props.name}</p>
          </div>
          <div className="line" />
          <div className="Profile__info-item">
            <p className="">E-mail</p>
            <p className="">{props.email}</p>
          </div>
        </div>
      </div>
      <div className="Profile__button-box">
        <button className="Profile__btn Profile__btn_edit">Редактировать</button>
        <button className="Profile__btn Profile__btn_logout">Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;