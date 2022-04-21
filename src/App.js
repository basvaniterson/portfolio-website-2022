import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import Techlab from './components/pages/Techlab';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Projects" element={<Projects />} />
        <Route exact path="AboutMe" element={<AboutMe />} />
        <Route exact path="Techlab" element={<Techlab />} />
      </Routes>
      <Footer />
    </Router>

    </div>
  );
}

export default App;

