import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

const testMovie = [
  {
    i: 1,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 2,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 3,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 4,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 5,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 6,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 7,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 8,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 9,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 10,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 11,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 12,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 13,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  }, {
    i: 14,
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: '../../images/pic1.jpg'
  },
]

function Movies(props) {
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm onLoadMovieList={props.onLoadMovieList} />
      {
        props.isLoading ? 
        <Preloader /> :
        props.movieList.length !== 0 &&
        <MoviesCardList
          movieListRender={props.movieList}
          isSaveMovie={props.isSaveMovie}
          movieListOriginal={testMovie}
          handleLoadCard={props.onAddMovieList}
          handleSaveMovie={props.handleSaveMovie}
        />
      }

      <Footer />
    </div>
  )
}
export default Movies;