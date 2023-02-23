import './Main.css';
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import '../header-text/header-text.css';
import '../text/text_size-small.css';
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
  return (
    <div className="Main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  )
}
export default Main;