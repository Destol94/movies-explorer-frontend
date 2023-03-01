import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
  const testMovie = [
    {
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },{
      nameRU: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '../../images/pic1.jpg'
    },
  ]
    

return (
  <div className="Movies">
    <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
    <SearchForm />
    <MoviesCardList movieList={testMovie} />
    <Footer />
  </div>
)
}
export default Movies;