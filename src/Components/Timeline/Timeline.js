import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react"
import './Timeline.css'
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const timelineEvents = [
    {
      id: 1,
      year: "2014",
      title: "Abduction and captivity",
      description: "Initial incident that led to the legal proceedings.",
    },
    {
      id: 2,
      year: "2015–2023",
      title: "Investigations and legal preparation",
      description: "Extended period of investigations and preparation for legal action.",
    },
    {
      id: 3,
      year: "Feb 6, 2025",
      title: "Attempted asset seizure",
      description: "Judge Zidane attempted to seize assets related to the case.",
    },
    {
      id: 4,
      year: "Early 2025",
      title: "Lawsuit filed",
      description: "Official lawsuit filed in U.S. District Court.",
    },
    {
      id: 5,
      year: "Spring 2025",
      title: "First hearing scheduled",
      description: "Initial court hearing scheduled to begin proceedings.",
    },
    {
      id: 6,
      year: "Present",
      title: "Ongoing legal developments",
      description: "Continuing legal actions and developments in the case.",
    },
  ]

export default function Timeline() {

    const [expandedId, setExpandedId] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
    }

    return (
    <div className="timeline-wrapper">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='press-arrow'>
        <Link to='/' className='home-button'>
          <FaLongArrowAltLeft className='home-icon' />
        </Link>
      </div>
      <h1 className="timeline-title">Legal Timeline</h1>
      <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line">
          </div>
          {timelineEvents.map((event, index) => (
          <div
              key={event.id}
              className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
          >
              {/* Timeline dot */}
              <div className="timeline-dot">
              <span className="timeline-dot-number">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="timeline-content">
              <div className="timeline-card" onClick={() => toggleExpand(event.id)}>
                  <div className="timeline-card-header">
                  <span className="timeline-year">{event.year}</span>
                  {expandedId === event.id ? (
                      <ChevronUp className="timeline-icon" />
                  ) : (
                      <ChevronDown className="timeline-icon" />
                  )}
                  </div>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  {expandedId === event.id && (
                  <p className={`timeline-description ${expandedId === event.id ? "expanded" : ""}`}>
                      {event.description}
                  </p>
                  )}
              </div>
              </div>
          </div>
          ))}
      </div>
      <div className={`rights-section ${menuOpen ? 'mobile-show' : ''}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Sara</Link>
        <Link to="/back" onClick={() => setMenuOpen(false)}>Background to Injustice</Link>
        <Link to="/story" onClick={() => setMenuOpen(false)}>The Story</Link>
        <Link to="/timeline" onClick={() => setMenuOpen(false)}>Legal Timeline</Link>
        <Link to="/next-step" onClick={() => setMenuOpen(false)}>Next Steps</Link>
        <Link to="/press" onClick={() => setMenuOpen(false)}>Press</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
  </div>
  )
}