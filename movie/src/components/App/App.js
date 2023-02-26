import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { useState } from 'react';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import RouteWithForm from '../RouteWithForm/RouteWithForm';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home loggedIn={loggedIn} /> }  />
        <Route path="/movies" element={ <Movies loggedIn={loggedIn} />} />
        <Route path="/saved-movies" element={ <Movies loggedIn={loggedIn} /> } />
        <Route path="/profile" element={ <Profile loggedIn={loggedIn} />} />
        <Route path="/signup" element={ <Register /> } />
        <Route path="/signin" element={ <Login />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
