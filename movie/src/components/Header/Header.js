import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const bc = {
    backgroundColor: props.bcColor
  }
  return (
    <header className="Header" style={bc} >
      <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
      <Navigation loggedIn={props.loggedIn} />
      {props.loggedIn &&
        <button className="Header_btn-burger" onClick={props.handlerOpenNavBar}>
          <div className="Header_btn-burger_line" />
          <div className="Header_btn-burger_line" />
          <div className="Header_btn-burger_line" />
        </button>
      }

    </header>
  )
}
export default Header;