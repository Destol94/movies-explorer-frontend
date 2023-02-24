import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { useState } from 'react';
import Movies from '../Movies/Movies';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home loggedIn={loggedIn} /> }  />
        <Route path="/movies" element={ <Movies loggedIn={loggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
