import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

// const [movieListSizeWindow, setMovieListSizeWindow] = useState(props.movieList)
//   window.addEventListener('resize', (e) => {
//     // console.log(document.documentElement.clientWidth);
//     // console.log(props.movieList.length);
//     const width = document.documentElement.clientWidth;
//     if (900<width) {
//       setMovieListSizeWindow(props.movieList.slice(0, 2));
//     }
//     else {
//       // setMovieListSizeWindow(props.movieList);
//     }
//     console.log(props.movieList);
//   })

function Movies(props) {
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

  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const [movieListWithWidth, setMovieListWithWidth] = useState(testMovie);
  useEffect(() => {
    window.onresize = () => { setWindowWidth(document.documentElement.clientWidth) };
    if (1000 < windowWidth) {
      setMovieListWithWidth(testMovie.slice(0, 12));
    }
    else if (800 < windowWidth)  {
      setMovieListWithWidth(testMovie.slice(0, 8));
    }
    else if (700 < windowWidth) {
      setMovieListWithWidth(testMovie.slice(0, 4));
    }

    return () => { window.onresize = false };
  }, [windowWidth]);

  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm />
      <MoviesCardList movieList={movieListWithWidth} saveMovie={props.saveMovie} />
      <Footer />
    </div>
  )
}
export default Movies;