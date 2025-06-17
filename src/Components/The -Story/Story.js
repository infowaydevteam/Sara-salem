import React, { useState, useEffect } from 'react';
import './Story.css';
import story from '../../images/story.png';
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Story() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='press-container'>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='heading'>
        <h4>Sara's Story</h4>
      </div>
      <div className='press-left'>
        <Link to='/' className='homes-button'>
          <FaLongArrowAltLeft className='homes-icon' />
        </Link>
        <div className='about-back'>
          <img src={story} className='about-circle' alt='circle' />
          <h4>In Erbil after escape</h4>
        </div>
      </div>
      <div className='press-right'>
        <div className='about-item'>
          <p>
            Sara’s nightmare began in 2014. Then an established and respected investor in Iraq, she was forcibly abducted by members of AAH, a group with deep links to Iran’s Quds Force. Over a harrowing 43-day captivity, Saleem was subjected to psychological torture, intimidation, and coercion, all allegedly orchestrated by corrupt former business partners - the Hanna brothers (Nizar, Nameer, and Ramiz Nasri) - with the complicity of Iraqi state officials.
          </p>
          <p>
            Her captors demanded she hand over her 50% stake in the SAFA AL BASRA project, a vast mixed-use real estate development in southern Iraq. At its peak, the project included thousands of housing units and was seen as a beacon of economic recovery in a war-torn region. Saleem, however, refused to yield.
          </p>
          <p>
            With the help of private intelligence operatives and tracking support from the Federal Bureau of Investigation, Saleem launched a daring escape. Her armoured vehicle came under fire more than 2,000 times, and she was narrowly extracted from what her legal team describes as a “coordinated assassination attempt.”
          </p>
          <p>
            “This was not just a kidnapping,” said Robert Amsterdam, the veteran international lawyer co-leading Saleem’s case. “It was a state-assisted act of terrorism intended to destroy a U.S. citizen’s life, reputation, and rights — for profit.
          </p>
          <p>
            “This suit forges a new path in obtaining redress for victims of Iran’s stranglehold over important actors in the Iraqi system, it is time for the selling of judgements and corruption of the judiciary in Iraq to end. Dangerous, violent criminals should not be allowed to buy their acquittals with bribes.”
          </p>
          <p>
            Mr Amsterdam added: “Chief Justice Faiq Zidane’s corruption is glaringly evident. At the same time that he issued a politically charged arrest warrant for President Trump, he is also trying to strip away everything that this woman has worked tirelessly to build. On February 6, he is attempting to rob her of what she has lawfully earned, using the criminal Hanna brothers as his instruments.”
          </p>
          <p>
            Saleem’s lawsuit seeks $2 billion in damages, citing, kidnapping and false imprisonment, torture and psychological abuse, loss of contracts and business opportunities, emotional trauma and damage to reputation, violation of U.S. anti-terrorism and human rights laws.
          </p>
          <p>
            She is represented by a powerhouse legal trio - Robert Amsterdam, known globally for taking on corrupt regimes; Akiva Shapiro, a leading litigator at Gibson Dunn; and William Bourdon, the Paris-based human rights attorney famous for representing whistle-blowers and victims of state abuse.
          </p>
          <p>
            Their collective argument is simple, the attack on Sara Saleem wasn’t just criminal - it was political.
          </p>
          <p>
            “The Hanna brothers acted as proxies,” said Shapiro. “But the real muscle came from Iranian-backed militias and their allies in Iraq’s judiciary. This case will test whether the U.S. justice system can reach into the murky intersections of corruption, terrorism, and foreign influence.”
          </p>
          <p>
            Mr Shapiro added: “Sara Saleem is a Kurdish-American hero we are confident that justice will be served through the US court system to those who kidnapped and tortured her and have not relented in their campaign to target her for standing up for her rights and against corruption in Iraq.”
          </p>
          <p>
            Tensions are rising in Iraq, where the legal proceedings have already sent shockwaves through Baghdad’s corridors of power. According to the complaint, Judge Zidane is preparing to acquit the Hanna brothers and other co-conspirators in a trial Saleem’s lawyers say is “rigged, corrupt, and bought.”
          </p>
          <p>
            “The same man issuing politically motivated arrest warrants for President Trump is attempting to erase the crimes of terrorists who nearly killed an American citizen,” Amsterdam said, referencing Zidane’s controversial role in targeting Western figures critical of Iranian influence in Iraq.
          </p>
          <p>
            Multiple U.S. politicians from both parties - including former Secretary of State Mike Pompeo, Senators Tim Kaine and Mark Warner, and Congressmen Ronny Jackson and Gerry Connolly - have written letters of concern to the U.S. Department of State, the Iraqi Embassy, and international human rights bodies, urging transparency and accountability in the Iraqi judiciary.
          </p>
          <p>
            Sara Saleem is no ordinary plaintiff. A dual American-Iraqi citizen, she was born into a prominent Kurdish family. Her father served in the Kurdish Parliament for over a decade, and she quickly carved out her own legacy becoming Managing Director of the Nasri Group, leading the Sheraton Hotel in Basra, and launching the Pepsi bottling plant in Northern Iraq.
          </p>
          <p>
            After relocating to the U.S. under the Special Immigrant Visa (SIV) programme - a pathway for families of U.S. military allies - she became a naturalised citizen in 2020.
          </p>
          <p>
            She now lives in Virginia with her three children, two of whom attend George Mason University and one who excels in middle school. She is a law-abiding, tax-paying entrepreneur who, despite extraordinary trauma, remains fiercely committed to justice.
          </p>
          <p>
            In 2025, she is set to launch the Sara Saleem Foundation, a Washington, D.C.-based non-profit focusing on judicial reform, counter-terrorism advocacy, and support for victims of authoritarian abuse.
          </p>
          <p>
            Saleem’s story is already being hailed as a new test case for cross-border justice. Her lawyers plan to serve notice internationally, with translations of the lawsuit already being prepared for distribution inside Iraq. If successful, the case could pave the way for other survivors of foreign-backed terrorism to pursue redress under U.S. law.
          </p>
          <p>
            “Her courage is contagious,” said Amsterdam. “Sara Saleem represents everything these thugs fear - a woman with a brain, a backbone, and an American passport. This is going to be one hell of a fight.”
          </p>
          <p>
            The first court hearing is expected later this spring. Saleem, for her part, says she’s prepared for the long road ahead.
          </p>
          <p>
            “I don’t want revenge,” she says. “I want justice. I want my children to know that we don’t bow to bullies. We fight them — in court, with truth, and with faith.”
          </p>
        </div>
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
  );
}