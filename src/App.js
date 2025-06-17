// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Press from './Components/Press/Press';
import Contact from './Components/Contact/Contact';
import Back from './Components/Background-Injustice/Back';
import Story from './Components/The -Story/Story';
import Timeline from './Components/Timeline/Timeline';
import Media from './Components/Media/Media';
import Next from './Components/Next-step/Next';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/back" element={<Back />} />
        <Route path="/story" element={<Story />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/media" element={<Media />} />
        <Route path="/next-step" element={<Next />} />
      </Routes>
    </Router>
  );
}

export default App;
