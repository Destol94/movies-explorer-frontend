import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { useState } from 'react';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home loggedIn={loggedIn} /> }  />
        <Route path="/sign-up" element={<><p>1</p><p>2</p></>} loggedIn={loggedIn} />
      </Routes>
    </div>
  );
}

export default App;
