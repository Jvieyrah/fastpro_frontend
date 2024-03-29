import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Pokemon from './pages/pokemon';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/cadastrar" element={ <Signup /> } />
      <Route exact path="/pokemon" element={ <Pokemon /> } />
    </Routes>
  );
}

export default App;
