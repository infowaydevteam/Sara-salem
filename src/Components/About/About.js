import { useState, useEffect } from 'react';
import './About.css';
import about from '../../images/about-sara.png';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';

export default function About() {
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
    <div className='pressa-container'>
      <div className="hamburgera" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='heading'>
        <h4>About Sara</h4>
      </div>
      <div className='pressa-left'>
        <Link to='/' className='homea-button'>
          <FaLongArrowAltLeft className='homea-icon' />
        </Link>
        <div className='abouts-back'>
          <img src={about} className='abouts-circle' alt='Sara with children' />
          <h4>Sara with her children in Washington D.C.</h4>
        </div>
      </div>
      <div className='pressa-right'>
        <div className='abouts-item'>
          <p>
            Sara Saleem's story is not just about injustice — it's about resistance in the face of systemic oppression. Her lawsuit lifts the veil on a brutal campaign of harassment, extortion, and violence.
          </p>
          <p>
            Her abduction and torture were not isolated acts, but part of a broader effort to silence voices of reform and confiscate wealth from successful individuals.
          </p>
          <p>
            The case exposes a dangerous overlap between state power and violent militias, making it a landmark in holding international human rights violators accountable.
          </p>
          <p>
            With the support of a world-class legal team, Sara's voice now echoes far beyond Erbil — calling for transparency, justice, and global accountability.
          </p>
        </div>
      </div>
      <div className={`righta-section ${menuOpen ? 'mobile-show' : ''}`}>
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