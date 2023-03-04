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


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const [movieListWithWidth, setMovieListWithWidth] = useState([]);


  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  function loadMovieList(searchText, checkboxState) {
    moviesApi.getMovieList()
      // .then((res) => {setMovieListWithWidth(res)})
      .then((res) => {
        localStorage.setItem('searchResults', JSON.stringify(res));
        localStorage.setItem('searchText', searchText);
        localStorage.setItem('checkboxState', checkboxState)
      })
      // .then((res) => { console.log(res) })
      .catch(err => { console.log(err) });
  }

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];

    console.log(JSON.parse(localStorage.getItem('searchResults')));
    if (JSON.parse(localStorage.getItem('searchResults'))) {
      arr.push(...JSON.parse(localStorage.getItem('searchResults')));
      if (700 > windowWidth) {
        setMovieListWithWidth(arr.slice(0, 4));
      }
      else if (800 > windowWidth) {
        setMovieListWithWidth(arr.slice(0, 8));
      }
      else {
        setMovieListWithWidth(arr.slice(0, 12));
      };
    }

  }, []);

  function handleAddMovie() {
    let arr = {};
    arr = (JSON.parse(localStorage.getItem('searchResults')).find(item => {
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
