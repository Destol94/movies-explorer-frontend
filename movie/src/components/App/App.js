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
  const [isLoading, setIsLoading] = useState(false);


  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  function loadMovieList(searchText, checkboxState) {
    moviesApi.getMovieList()
      .then((res) => {
        localStorage.setItem('searchResults', JSON.stringify(res));
        localStorage.setItem('searchText', searchText);
        localStorage.setItem('checkboxState', checkboxState);
        renderMovie();
      })
      .catch(err => { console.log(err) });
  }

  function renderMovie() {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];
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
  }

  useEffect(() => {
    renderMovie();
  }, []);

  function handleAddMovie() {
    const windowWidth = document.documentElement.clientWidth;
    let arr = movieListWithWidth.slice(0);
    let numberFilmOfAdded = 0;
    if (windowWidth < 1109) {
      numberFilmOfAdded = 2;
    }
    else {
      numberFilmOfAdded = 3;
    }
    for (let i = 0; i < numberFilmOfAdded; i++) {
      let movie = (JSON.parse(localStorage.getItem('searchResults')).find(item => {
        return arr.every(elem => item.id !== elem.id);
      }))
      arr.push(movie);
    }
    console.log(arr);
    setMovieListWithWidth(arr);
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
            isLoading={isLoading}
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
            isLoading={isLoading}
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
