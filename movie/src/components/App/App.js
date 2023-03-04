import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import NavBar from '../NavBar/NavBar';
import moviesApi from '../../utils/MoviesApi';

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

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const [movieListWithWidth, setMovieListWithWidth] = useState(testMovie);


  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  function loadMovieList() {
    moviesApi.getMovieList()
      .then((res) => {setMovieListWithWidth(res)})
      .catch(err => {console.log(err)});
  }

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];
    arr.push(...testMovie);
    if (700 > windowWidth) {
      setMovieListWithWidth(arr.slice(0, 4));
    }
    else if (800 > windowWidth) {
      setMovieListWithWidth(arr.slice(0, 8));
    }
    else {
      setMovieListWithWidth(arr.slice(0, 12));
    }
  }, []);

  function handleAddMovie() {
    let arr = {};
    arr = (testMovie.find(item => {
      return movieListWithWidth.every(elem => item !== elem);
    }))
    setMovieListWithWidth([...movieListWithWidth, arr]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
        <Route path="/movies"
          element={<Movies
            loggedIn={loggedIn}
            onNavBar={handleOpenNavBar}
            onAddMovieList={handleAddMovie}
            movieList={movieListWithWidth}
            onLoadMovieList={loadMovieList}
          />}
        />
        <Route path="/saved-movies"
          element={<Movies
            loggedIn={loggedIn}
            saveMovie={true}
            onNavBar={handleOpenNavBar}
            onAddMovieList={handleAddMovie}
            movieList={movieListWithWidth}
            onLoadMovieList={loadMovieList}
          />}
        />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NavBar isOpen={isNavBarOpen} closeNavBar={handleCloseNavBar} />
    </div>
  );
}

export default App;
