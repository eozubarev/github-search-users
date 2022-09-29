import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/favourites" element={ <FavouritesPage/> }></Route>
      </Routes>
    </>
  );
}

export default App;
