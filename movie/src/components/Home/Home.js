import './Home.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

function Home(props) {

  return (
    <div className="Home">
      <Header loggedIn={props.loggedIn} bcColor="#073042"/>
      <Main />
    </div>
  )
}
export default Home;