import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    // Simple mobile check
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      // If not mobile (i.e., desktop), redirect
      window.location.href = 'https://yugalmeet.com';
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
