import './Header.css';
import '../../blocks/logo/logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const bc = {
    backgroundColor : props.bcColor
  }
  return (
    <header className="Header" style={bc} >
      <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
      <Navigation loggedIn={props.loggedIn} />
    </header>
  )
}
export default Header;