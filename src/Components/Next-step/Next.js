import React, {useState,useEffect} from 'react';
import './Next.css';
import judge1 from '../../images/judge1.jpg';
import judge2 from '../../images/judge2.webp';
import judge3 from '../../images/judge3.webp';
import judge4 from '../../images/judge4.jpg'
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  const items = [
  {
    img: judge1,
    title: "Court Proceedings",
    text: "Highlight critical court cases that challenge political interference and promote transparency in Iraq’s legal system."
  },
  {
    img: judge2,
    title: "Foundation Launch",
    text: "Introduce our new foundation aimed at promoting judicial independence and fighting systemic corruption."
  },
  {
    img: judge3,
    title: "Public Awareness Campaign",
    text: "Educate citizens about their legal rights and the importance of a fair, impartial judiciary."
  },
  {
    img: judge4,
    title: "Opportunities for Public Engagement",
    text: "Encourage community involvement through events, forums, and volunteer programs to strengthen legal accountability."
  }
];


  return (
    <div className='abt-container'>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='abt-arrow'>
        <Link to='/' className='homen-button'>
          <FaLongArrowAltLeft className='homen-icon' />
        </Link>
      </div>

      <div className='abt-content'>
        <h1 className='abt-title'>Next Steps</h1>

        <div className='abt-parts'>
          {items.map(({ img, title, text }, i) => (
            <div className='abt-part' key={i}>
              <div className='abt-jimage'>
                <img src={img} alt={title} />
              </div>
              <strong className='abt-topic'>{title}</strong>
              <p className='abt-text'>{text}</p>
              <button className='abt-button'>Learn More</button>
            </div>
          ))}
        </div>
      </div>
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
