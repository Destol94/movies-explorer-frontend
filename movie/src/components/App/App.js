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
import { autorization, changeProfile, checkToken, deleteMovie, loadMovieList, logout, registration, saveMovie } from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';


function App() {

  const formWithValidation = new useFormWithValidation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const [movieListWithWidth, setMovieListWithWidth] = useState([]);
  const [saveMovieList, setSaveMovieList] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  function setSearchValues(searchText, checkboxState) {
    renderMovie();
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('checkboxState', checkboxState);
    setIsLoading(false);
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
      if(movie) {
        arr.push(movie);
      }
    }
    console.log(arr);
    setMovieListWithWidth(arr);
  };
  async function handleAddSaveMovie() {
    const windowWidth = document.documentElement.clientWidth;
    const initialList = await loadMovieList();
    let arr = saveMovieList.slice(0);
    let numberFilmOfAdded = 0;
    if (windowWidth < 1109) {
      numberFilmOfAdded = 2;
    }
    else {
      numberFilmOfAdded = 3;
    }
    for (let i = 0; i < numberFilmOfAdded; i++) {
      let movie = initialList.find(item => {
        return arr.every(elem => item._id !== elem._id);
      })
      if(movie) {
        arr.push(movie);
      }
    }
    console.log(arr);
    setSaveMovieList(arr);
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
  async function renderingSavedMovies(list, listMovie, setListMovie) {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];
    // if (listMovie) {
      arr.push(...list);
      if (700 > windowWidth) {
        setListMovie(arr.slice(0, 4));
      }
      else if (800 > windowWidth) {
        setListMovie(arr.slice(0, 8));
      }
      else {
        setListMovie(arr.slice(0, 12));
      };
    // }
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
      setCurrentUser(user);
      setLoggedIn(true);
      navigate("/movies");
    } catch (error) { console.log(error) }
  }

  const handleSaveMovie = async (movie, setCheckbox) => {
    try {
      const res = await saveMovie(movie);
      if(res) {
        // setSaveMovieList([...saveMovieList, res]);
        setCheckbox(true);
      }
    } catch (err) { console.log(err) }
  }

  const handleDeleteMovie = async (id, setCheckbox) => {
    try {
      const res = await deleteMovie(id);
      if (res) {
        setSaveMovieList((saveMovieList) => { return saveMovieList.filter(item => { return item._id !== res._id }) });
        if(setCheckbox) {
          setCheckbox(false);
        }
      }
    } catch (err) { console.log(err) };
  }

  const handleChangeProfile = async (email, name) => {
    try {
      const res = await changeProfile(email, name);
      if (!res) {
        throw new Error('Ошибка обновления пользователя');
      }
      console.log(res);
      setIsLoading(false);
      setCurrentUser(res);
    } catch (error) { console.log(error) };
  }

  async function hadleLogout() {
    await logout();
  }
  const cbLogout = useCallback(() => {
    hadleLogout();
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }, [navigate]);

  const loadSaveMovie = useCallback(async () => {
    try {
      const res = await loadMovieList();
      localStorage.setItem('fullSaveMovie', JSON.stringify(res));
      if (res) {
        renderingSavedMovies(res, saveMovieList, setSaveMovieList);
        // setSaveMovieList(res);
      }
    } catch (err) { console.log(err) }
  }, [])

  function loadDefaultListMovie() {
    moviesApi.getDefaultMovieList()
      .then((res) => {
        localStorage.setItem('searchResults', JSON.stringify(res));
      })
      .catch(err => { console.log(err) });
  }


  useEffect(() => {
    if (loggedIn) {
      loadSaveMovie();
    }
  }, [loggedIn, loadSaveMovie]);


  useEffect(() => {
    if (loggedIn) {
      loadDefaultListMovie();
      // renderMovie();
      // renderMovie(loadSaveMovie, saveMovieList, setSaveMovieList);
    }
  }, [loggedIn]);

  async function handleTokenCheck() {
    const res = await checkToken();
    if (res) {
      setCurrentUser(res);
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
          <Route element={<ProtectedRouteElement loggedIn={loggedIn} />} >
            <Route path="/movies"
              element={<Movies
                loggedIn={loggedIn}
                onNavBar={handleOpenNavBar}
                onAddMovieList={handleAddMovie}
                movieList={movieListWithWidth}
                onLoadMovieList={setSearchValues}
                isLoading={isLoading}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                setIsLoading={setIsLoading}
                saveMovieList={saveMovieList}
              />}
            />
            <Route path="/saved-movies"
              element={<Movies
                loggedIn={loggedIn}
                isSaveMovie={true}
                onNavBar={handleOpenNavBar}
                onAddMovieList={handleAddSaveMovie}
                movieList={saveMovieList}
                onLoadMovieList={setSearchValues}
                isLoading={isLoading}
                handleDeleteMovie={handleDeleteMovie}
              />}
            />
            <Route path="/profile"
              element={<Profile
                loggedIn={loggedIn}
                onNavBar={handleOpenNavBar}
                onLogout={cbLogout}
                onSubmit={handleChangeProfile}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />}
            />
          </Route>
          {/* <Route path="/profile"
            element={<Profile
              loggedIn={loggedIn}
              onNavBar={handleOpenNavBar}
              onLogout={cbLogout}
              onSubmit={handleChangeProfile}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />}
          /> */}
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
