import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import './style.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import WatchlistPage from './pages/WatchlistPage';
import SingleMoviePage from './pages/SingleMoviePage';
import CuratedPage from './pages/CuratedPage';
import CategoryPage from './pages/CategoryPage';
import SearchResult from './pages/SearchResult';
import TastePage from './pages/TastePage';
import MoodPage from './pages/MoodPage';
import ExperiencePage from './pages/ExpreriencePage.jsx';
import MobileMenu from './components/MobileMenu/MobileMenu';
import YourWatchlist from './pages/YourWatchlist';

function App() {
  const location = useLocation();

  const excludedPaths = ['/login', '/register', '/', '/moodPage', '/experiencePage'];

  const showMainNavBar = !excludedPaths.includes(location.pathname);
  const showMobileNavBar = !excludedPaths.includes(location.pathname);
  const showFooter = !excludedPaths.includes(location.pathname);

  return (
    <>
      {showMainNavBar && <Nav />}
      {showMobileNavBar && <MobileMenu />}
      <Routes location={location}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<TastePage />} />
        <Route exact path="/moodPage" element={<MoodPage />} />
        <Route exact path="/experiencePage" element={<ExperiencePage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/yourWatchlist" element={<YourWatchlist />} />
        <Route exact path="/:id" element={<SingleMoviePage />} />
        <Route exact path="/search" element={<SearchResult />} />
        <Route exact path="/curatedPage" element={<CuratedPage />} />
        <Route exact path="/categoryPage" element={<CategoryPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
