import React, { useState, useEffect } from 'react';
import './Back.css';
import back from '../../images/Back-injustice.png';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';

export default function Back() {
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
    <div className='press-container'>
      <div className="hamburgerb" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='heading'>
        <h4>Background to Injustice</h4>
      </div>
      <div className='press-left'>
        <Link to='/' className='homeb-button'>
          <FaLongArrowAltLeft className='homeb-icon' />
        </Link>
        <div className='backb'>
          <img src={back} className='circle' alt='circle'/>
          <h4>Sara In Erbil</h4>
        </div>
      </div>
      <div className='press-right'>
        <div className='press-item'>
          <p>
            An extraordinary legal storm is brewing in Washington D.C., with far-reaching implications for international law, U.S. foreign policy, and the credibility of Iraq's judicial system. It will also be a new test of strength for President Trump's Administration.
          </p>
          <p>
            In what could become one of the most consequential civil actions filed under the U.S. Anti-Terrorism and Torture Victims Protection Acts, American-Kurdish businesswoman and engineer Sara Saleem is suing senior Iraqi officials - including the country's most powerful judge - for kidnapping, torture, attempted murder, and a massive theft of business assets.
          </p>
          <p>
            Backed by one of America's most prestigious law firms, Gibson, Dunn & Crutcher LLP, Saleem's $2 billion lawsuit was filed in the U.S. District Court for the Eastern District of Virginia, naming Judge Faiq Zidane, head of Iraq's Supreme Judicial Council, along with a network of Iraqi officials and known members of the U.S.-designated terrorist group Asa'ib Ahl al-Haq (AAH).
          </p>
          <p>
            The suit accuses them of orchestrating a violent plot to abduct and extort Sara Saleem, in an attempt to strip her of her lucrative stake in a major Iraqi real estate development.
          </p>
        </div>
      </div>
      <div className={`rightb-section ${menuOpen ? 'mobile-show' : ''}`}>
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
}