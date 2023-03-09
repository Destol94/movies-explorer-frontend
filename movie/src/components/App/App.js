import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import { useCallback, useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import NavBar from '../NavBar/NavBar';
import moviesApi from '../../utils/MoviesApi';
import { useFormWithValidation } from '../../vendor/validationInputs/validationInputs';
import { autorization, changeProfile, registration, saveMovie } from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';


function App() {

  const formWithValidation = new useFormWithValidation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const [movieListWithWidth, setMovieListWithWidth] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const cbRegistration = async (name, email, password) => {
    try {
      const data = await registration(name, email, password);
      console.log(data);
      if (!data) {
        throw new Error('Ошибка регистрации');
      }
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt);
        setLoggedIn(true);
        navigate("/movies");
      }
    } catch (err) { console.log(err) };
  };

  const cbAutorization = async (email, password) => {
    try {
      const user = await autorization(email, password);
      if (!user) {
        throw new Error('Ошибка входа');
      }
      // localStorage.setItem('jwt', jwt.token);
      setCurrentUser(user);
      setLoggedIn(true);
      navigate("/movies");
    } catch (error) { console.log(error) }
  }

  const handleSaveMovie = async (movie) => {
    try {
      const res = await saveMovie({ movie });
      console.log(res);
    } catch (err) { console.log(err) }
  }

  const handleChangeProfile = async (email, name) => {
    try {
      const res = await changeProfile(email, name);
      if (!res) {
        throw new Error('Ошибка обновления пользователя');
      }
      console.log(res);
      setCurrentUser(res);
    } catch (error) { console.log(error) };
  }

  const cbLogout = useCallback(() => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    renderMovie();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser} >
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
              handleSaveMovie={handleSaveMovie}
            />}
          />
          <Route path="/saved-movies"
            element={<Movies
              loggedIn={loggedIn}
              isSaveMovie={true}
              onNavBar={handleOpenNavBar}
              onAddMovieList={handleAddMovie}
              movieList={movieListWithWidth}
              onLoadMovieList={loadMovieList}
              isLoading={isLoading}
            />}
          />
          <Route path="/profile"
            element={<Profile
              loggedIn={loggedIn}
              onNavBar={handleOpenNavBar}
              onLogout={cbLogout}
              onSubmit={handleChangeProfile}
            />}
          />
          <Route path="/signup"
            element={<Register
              formWithValidation={formWithValidation}
              onRegistration={cbRegistration}
            />} />
          <Route path="/signin"
            element={<Login
              formWithValidation={formWithValidation}
              onLogin={cbAutorization}
            />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar isOpen={isNavBarOpen} closeNavBar={handleCloseNavBar} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
