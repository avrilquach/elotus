import React from 'react';
import Movie from './pages/Movie'
import Details from './pages/Details'
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />}></Route>
        <Route path="/details/:movieId" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
