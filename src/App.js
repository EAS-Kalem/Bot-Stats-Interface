import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Quiz from './components/pages/Quiz';
import Quotes from './components/pages/Quotes';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/leaderboard' element = { <Products /> } />
        <Route path='/users' element = { <Services /> } />
        <Route path='/signup' element = { <SignUp /> } />
        <Route path='/quiz' element = { <Quiz /> } />
        <Route path='/quotes' element = { <Quotes /> } />
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
