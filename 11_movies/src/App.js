import React from 'react';
import './App.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;