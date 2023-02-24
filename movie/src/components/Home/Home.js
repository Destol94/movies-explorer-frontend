import './Home.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';

function Home(props) {

  return (
    <div className="Home">
      <Header loggedIn={props.loggedIn} bcColor="#073042"/>
      <Main />
      <Footer />
    </div>
  )
}
export default Home;