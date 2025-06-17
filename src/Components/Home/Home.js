import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-container">
      <div className='im'>
        <img
          src={isMobile ? '/bg1.png' : '/bg1.png'} // Conditional image source
          alt="Overlay Graphic"
          className="bg1-overlay"
        />
      </div>
      <div className="hamburgerh" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="left-section">
        <div className="content-wrapper">
          <img
            src="/Justice_For_Sara_Saleem_Logo.svg"
            alt="Sara Saleem Foundation Logo"
            className="logo-image"
          />
          <div className="sub-title">
            <h4 className="text-subtitle">
              A Fight Against State-Sponsored Terror and Judicial Corruption
            </h4>
            <p>
              Sara Saleem, a Kurdish-American entrepreneur and survivor of political violence, is taking on one of the most powerful judges in Iraq and a terrorist-linked network in a landmark $2B lawsuit filed in the U.S. Learn more about her story, the case, and how you can support the fight for justice.
            </p>
          </div>
        </div>
      </div>

      <div className={`right-section ${menuOpen ? 'mobile-show' : ''}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Sara</Link>
        <Link to="/back" onClick={() => setMenuOpen(false)}>Background to Injustice</Link>
        <Link to="/story" onClick={() => setMenuOpen(false)}>The Story</Link>
        <Link to="/timeline" onClick={() => setMenuOpen(false)}>Legal Timeline</Link>
        <Link to="/next-step" onClick={() => setMenuOpen(false)}>Next Steps</Link>
        <Link to="/press" onClick={() => setMenuOpen(false)}>Press</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </div>
  );
};

export default Home;