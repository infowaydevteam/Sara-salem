import React, {useEffect,useState} from 'react';
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [emailHref, setEmailHref] = useState("mailto:info@dreva.ai");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      // On desktop, use Gmail web link
      setEmailHref("https://mail.google.com/mail/?view=cm&to=samuelamsterdam@googlemail.com");
    }
  }, []);

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
    <div className="contact-container">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="press-left">
        <Link to="/" className="homec-button">
          <FaLongArrowAltLeft className="homeb-icon" />
        </Link>
      </div>
      <h1 className="contact-title">Contact</h1>
      <h4 className='justice'>#JusticeforSaraSaleem</h4>
      <p className="contact-note">
        For legal or press inquiries related to Sara Saleem’s case, contact:<br />
        Sam Amsterdam, Amsterdam Group Public Relations Inc —{' '}
        <a
          href={emailHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          samuelamsterdam@googlemail.com
        </a>
      </p>
      <div className={`rightp-section ${menuOpen ? 'mobilep-show' : ''}`}>
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