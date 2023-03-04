import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

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

  // const [movieListWithWidth, setMovieListWithWidth] = useState(testMovie);
  // useEffect(() => {
  //   const windowWidth = document.documentElement.clientWidth;
  //   const arr = [];
  //   arr.push(...testMovie);
  //   if (700 > windowWidth) {
  //     setMovieListWithWidth(arr.slice(0, 4));
  //   }
  //   else if (800 > windowWidth) {
  //     setMovieListWithWidth(arr.slice(0, 8));
  //   }
  //   else {
  //     setMovieListWithWidth(arr.slice(0, 12));
  //   }
  // }, []);


  // function handleLoadCard() {
  //   debugger;
  //   let arr = {};
  //   arr = (testMovie.find(item => {
  //     return movieListWithWidth.every(elem => item !== elem);
  //   }))
  //   setMovieListWithWidth([...movieListWithWidth, arr]);
  // };
console.log(props.movieList.length);
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm onLoadMovieList={props.onLoadMovieList} />
      {
        props.movieList.length !== 0 &&
        <MoviesCardList
          movieListRender={props.movieList}
          saveMovie={props.saveMovie}
          movieListOriginal={testMovie}
          handleLoadCard={props.onAddMovieList}
        />
      }

      <Footer />
    </div>
  )
}
export default Movies;