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

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(null);


  function handleOpenNavBar() {
    setIsNavBarOpen(true);
  }
  function handleCloseNavBar() {
    setIsNavBarOpen(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} onNavBar={handleOpenNavBar} />} />
        <Route path="/saved-movies" element={<Movies loggedIn={loggedIn} saveMovie={true} onNavBar={handleOpenNavBar} />} />
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
