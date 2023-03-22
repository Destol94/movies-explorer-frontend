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
import RouteRedirect from '../RouteRedirect/RouteRedirect';
import { shortFilmDuration, threeFilmsAdd, twoFilmsAdd } from '../../vendor/constants';
import Preloader from '../Preloader/Preloader';


function App() {

  const formWithValidation = new useFormWithValidation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);
  const [movieListWithWidth, setMovieListWithWidth] = useState([]);
  const [fullSaveMovieList, setFullSaveMovieList] = useState([]);
  const [saveMovieList, setSaveMovieList] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const checkboxStateBool = localStorage.getItem('checkboxState') === 'false' ? false : localStorage.getItem('checkboxState') === 'true' ? true : '';
  const [checkboxState, setCheckboxState] = useState(checkboxStateBool || false);
  const [searchText, setSearchText] = useState(localStorage.getItem('searchText') || '')
  const [checkboxSaveState, setCheckboxSaveState] = useState(false)
  const [searchSaveText, setSearchSaveText] = useState('');
  const [isNotificationPlateState, setIsNotificationPlateState] = useState({ isOpen: false, text: '' });
  const [location, setLocation] = useState('');
  console.log(localStorage.getItem('checkboxState'));
  console.log(checkboxStateBool);
  const navigate = useNavigate();

  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  const cbRegistration = async (name, email, password) => {
    try {
      const data = await registration(name, email, password);
      console.log(data);
      if (!data) {
        setIsNotificationPlateState({ isOpen: true, text: 'Ошибка регистрации' });
        throw new Error('Ошибка регистрации');
      }
      setCurrentUser(data);
      setLoggedIn(true);
      navigate("/movies");
    } catch (error) {
      if (error === 'Conflict') {
        setIsNotificationPlateState({ isOpen: true, text: 'Такой пользователь уже зарегестрирован' });
      } else {
        setIsNotificationPlateState({ isOpen: true, text: 'Ошибка регистрации, повторите попытку' });
        console.log(error);
      }
    }
  };

  const cbAutorization = async (email, password) => {
    try {
      const user = await autorization(email, password);
      if (!user) {
        setIsNotificationPlateState({ isOpen: true, text: 'Пользователь не найден' });
        throw new Error('Ошибка входа');
      }
      setCurrentUser(user);
      setLoggedIn(true);
      navigate("/movies");
    } catch (error) {
      setIsNotificationPlateState({ isOpen: true, text: 'Ошибка входа, повторите попытку или проверьте данные' });
      console.log(error);
    }
  }



  function searchMovies(searchText, checkboxState) {
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('checkboxState', checkboxState);
    const keyString = searchText.toLowerCase();
    const defaultMovieList = JSON.parse(localStorage.getItem('defaultMovieList'));

    const findMovie = (film) => {
      return film.country.toLowerCase().indexOf(keyString) !== -1 ||
        film.description.toLowerCase().indexOf(keyString) !== -1 ||
        film.director.toLowerCase().indexOf(keyString) !== -1 ||
        film.nameEN.toLowerCase().indexOf(keyString) !== -1 ||
        film.nameRU.toLowerCase().indexOf(keyString) !== -1 ||
        film.year.toLowerCase().indexOf(keyString) !== -1
    }
    let arr = [];
    if (checkboxState) {
      arr = defaultMovieList.filter(film => film.duration < shortFilmDuration && findMovie(film));
    } else {
      arr = defaultMovieList.filter(findMovie);
    }
    localStorage.setItem('searchResults', JSON.stringify(arr));
    renderingMovies(arr);
    if (arr.length === 0) {
      return arr.length;
    }
  }
  function searchSavedMovies(searchText, checkboxState) {
    const keyString = searchText.toLowerCase();
    const defaultMovieList = fullSaveMovieList;

    const findMovie = (film) => {
      return film.country.toLowerCase().indexOf(keyString) !== -1 ||
        film.description.toLowerCase().indexOf(keyString) !== -1 ||
        film.director.toLowerCase().indexOf(keyString) !== -1 ||
        film.nameEN.toLowerCase().indexOf(keyString) !== -1 ||
        film.nameRU.toLowerCase().indexOf(keyString) !== -1 ||
        film.year.toLowerCase().indexOf(keyString) !== -1
    }
    let arr = [];
    if (checkboxState) {
      arr = defaultMovieList.filter(film => film.duration < shortFilmDuration && findMovie(film));
    } else {
      arr = defaultMovieList.filter(findMovie);
    }
    renderingSavedMovies(arr);
  }

  function handleAddMovie() {
    const windowWidth = document.documentElement.clientWidth;
    let arr = movieListWithWidth.slice(0);
    let numberFilmOfAdded = 0;
    if (windowWidth < 1109) {
      numberFilmOfAdded = twoFilmsAdd;
    }
    else {
      numberFilmOfAdded = threeFilmsAdd;
    }
    for (let i = 0; i < numberFilmOfAdded; i++) {
      let movie = (JSON.parse(localStorage.getItem('searchResults')).find(item => {
        return arr.every(elem => item.id !== elem.id);
      }))
      if (movie) {
        arr.push(movie);
      }
    }
    setMovieListWithWidth(arr);
  };

  async function handleAddSaveMovie() {
    const windowWidth = document.documentElement.clientWidth;
    let arr = saveMovieList.slice(0);
    let numberFilmOfAdded = 0;
    if (windowWidth < 1109) {
      numberFilmOfAdded = twoFilmsAdd;
    }
    else {
      numberFilmOfAdded = threeFilmsAdd;
    }
    const resSearch = JSON.parse(localStorage.getItem('searchSaveResults'));
    const originalMovieList = resSearch ? resSearch : fullSaveMovieList;
    for (let i = 0; i < numberFilmOfAdded; i++) {
      let movie = originalMovieList.find(item => {
        return arr.every(elem => item._id !== elem._id);
      })
      if (movie) {
        arr.push(movie);
      }
    }
    setSaveMovieList(arr);
  };

  function renderingMovies(array) {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];
    if (array) {
      arr.push(...array);
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
  function renderingSavedMovies(list) {
    const windowWidth = document.documentElement.clientWidth;
    const arr = [];
    arr.push(...list);
    if (700 > windowWidth) {
      setSaveMovieList(arr.slice(0, 4));
    }
    else if (800 > windowWidth) {
      setSaveMovieList(arr.slice(0, 8));
    }
    else {
      setSaveMovieList(arr.slice(0, 12));
    };
  }


  const handleSaveMovie = async (movie, setCheckbox) => {
    try {
      const res = await saveMovie(movie);
      if (res) {
        setFullSaveMovieList([...fullSaveMovieList, res]);
        setSaveMovieList([...saveMovieList, res]);
        setCheckbox(true);
      }
    } catch (err) { console.log(err) }
  }

  const handleDeleteMovie = async (id, setCheckbox) => {
    try {
      const res = await deleteMovie(id);
      if (res) {
        setSaveMovieList((saveMovieList) => { return saveMovieList.filter(item => { return item._id !== res._id }) });
        setFullSaveMovieList((fullSaveMovieList) => { return fullSaveMovieList.filter(item => { return item._id !== res._id }) });
        if (setCheckbox) {
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
      setIsLoading(false);
      setIsNotificationPlateState({ isOpen: true, text: 'Данные успешно обновлены' });
      setCurrentUser(res);
    } catch (error) {
      if (error === 'Conflict') {
        setIsLoading(false);
        setIsNotificationPlateState({ isOpen: true, text: 'Такой пользователь уже зарегестрирован' });
      }
      else {
        setIsLoading(false);
        setIsNotificationPlateState({ isOpen: true, text: 'Ошибка обновления, попробуйте изменить почту или повторите попытку' });
      }
    };
  }

  async function hadleLogout() {
    await logout();
  }
  const cbLogout = useCallback(() => {
    hadleLogout();
    localStorage.clear();
    setMovieListWithWidth([]);
    setLoggedIn(false);
    setCurrentUser({});
    setSearchText('');
    setCheckboxState(false);
    navigate("/");
  }, [navigate]);

  const loadSaveMovie = useCallback(async () => {
    try {
      const res = await loadMovieList();
      if (res) {
        renderingSavedMovies(res);
        setFullSaveMovieList(res);
      }
      else {
        localStorage.clear();
        setMovieListWithWidth([]);
        setLoggedIn(false);
        setCurrentUser({});
        setSearchText('');
        setCheckboxState(false);
      }
    } catch (err) { console.log(err) }
  }, [])

  function loadDefaultListMovie() {
    moviesApi.getDefaultMovieList()
      .then((res) => {
        setIsLoading(true)
        localStorage.setItem('defaultMovieList', JSON.stringify(res));
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closeAlertNotification() {
    setIsNotificationPlateState({ isOpen: false, text: '' })
  }

  useEffect(() => {
    if (loggedIn) {
      loadSaveMovie();
    }
  }, [loggedIn, loadSaveMovie]);


  useEffect(() => {
    if (loggedIn) {
      loadDefaultListMovie();
      const searchResults = JSON.parse(localStorage.getItem('searchResults'))
      if (searchResults) {
        renderingMovies(searchResults);
      }
    }
  }, [loggedIn]);

  async function handleTokenCheck() {
    const res = await checkToken();
    if (res) {
      setLoggedIn(true);
      setCurrentUser(res);
      // window.history.back();
      console.log(location);
    }
    else setLoggedIn(false);
  };
  useEffect(() => {
    handleTokenCheck();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="App">
        {isLoading
          ?
          <Preloader />
          :
          <>
            <Routes>
              <Route path="/" element={<Home loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
              <Route element={<ProtectedRouteElement loggedIn={loggedIn} setLocation={setLocation} />} >
                <Route path="/movies"
                  element={<Movies
                    loggedIn={loggedIn}
                    onNavBar={handleOpenNavBar}
                    onAddMovieList={handleAddMovie}
                    movieList={movieListWithWidth}
                    searchMovies={searchMovies}
                    isLoading={isLoading}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    fullSaveMovieList={fullSaveMovieList}
                    resSearch={JSON.parse(localStorage.getItem('searchResults'))}
                    checkboxState={checkboxState}
                    setCheckboxState={setCheckboxState}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />}
                />
                <Route path="/saved-movies"
                  element={<Movies
                    loggedIn={loggedIn}
                    isSaveMovie={true}
                    onNavBar={handleOpenNavBar}
                    onAddMovieList={handleAddSaveMovie}
                    movieList={saveMovieList}
                    searchMovies={searchSavedMovies}
                    isLoading={isLoading}
                    handleDeleteMovie={handleDeleteMovie}
                    fullSaveMovieList={fullSaveMovieList}
                    checkboxState={checkboxSaveState}
                    setCheckboxState={setCheckboxSaveState}
                    searchText={searchSaveText}
                    setSearchText={setSearchSaveText}
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
                    isNotificationPlateState={isNotificationPlateState}
                    setIsNotificationPlateState={setIsNotificationPlateState}
                    onCloseAlertNotification={closeAlertNotification}
                  />}
                />
              </Route>
              <Route element={<RouteRedirect loggedIn={loggedIn} />}  >
                <Route path="/signup"
                  element={<Register
                    formWithValidation={formWithValidation}
                    onRegistration={cbRegistration}
                    isNotificationPlateState={isNotificationPlateState}
                    onCloseAlertNotification={closeAlertNotification}
                  />} />
                <Route path="/signin"
                  element={<Login
                    formWithValidation={formWithValidation}
                    onLogin={cbAutorization}
                    isNotificationPlateState={isNotificationPlateState}
                    onCloseAlertNotification={closeAlertNotification}
                  />}
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <NavBar isOpen={isNavBarOpen} closeNavBar={handleCloseNavBar} />
          </>
        }
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
