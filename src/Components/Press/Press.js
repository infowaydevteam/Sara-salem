import { useState} from 'react';
import './Press.css';
import p1 from '../../images/p1.png';
import RCW from '../../images/rcw.png';
import thepillar from '../../images/the-pillar.png';
import TCG from '../../images/The-Geopolitics-logo-latest-1.png';
import church from '../../images/churchtimeslogo.png';
import premier from '../../images/Premier-CN-Logo.svg';
import tablet from '../../images/TheTablet.webp';
import blitz from '../../images/BlitZ.jpg';
import Ap from '../../images/Ap-removebg-preview.png';
import crux from '../../images/crux-removebg-preview.png';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaBars, FaTimes } from 'react-icons/fa';

export default function Press() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='presss-container'>
      <div className="hamburgerp" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className='presss-left'>
        <div className='presss-arrow'>
          <Link to='/' className='homep-button'>
            <FaLongArrowAltLeft className='homep-icon' />
          </Link>
        </div>
        <p className='presss-title'>Press</p>
      </div>
      
      <div className='presss-right'>
        <div className='presss-item'>
          <img src={p1} alt='The New York Times' className='p1' />
          <p className='presss-description'>
            How a Virgian Businesswoman escaped her kidnappers in Iraq -- and later returned to finish her work.
          </p>
          <a href='https://theintercept.com/2022/04/30/iraq-kidnap-escape-iran-militia/' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={RCW} alt='BBC' className='rcw' />
          <p className='presss-description'>
            In the Middle East, much of the world's attention is on the conflict in Gaza and appropriately so. But other challenges remain. In Iraq, where American military forces liberated the country from the evil clutches of Saddam Hussein just a few years ago, the independence of an American ally is increasingly in doubt. Iranian sympathizers exist at all levels of Iraqi's government bureaucracy and legal system.
          </p>
          <a href='https://www.realclearworld.com/articles/2024/08/23/a_revealing_case_in_iraq_1053566.html' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={TCG} alt="The Geopolitics" className="geopolitics-logo" />
          <p className='presss-description'>
            The aftermath of war is often measured not only in the lives lost and infrastructure destroyed, but in the invisible dangers that persist long after the final shots are fired. In the South Caucasus, the region of Karabakh, internationally recognized as part of Azerbaijan, remains one of the most heavily mined areas in the world.
          </p>
          <a href='https://thegeopolitics.com/azerbaijans-landmine-challenge-in-karabakh-a-lingering-threat-to-peace/' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={thepillar} alt="The Pillar" className="geopolitics-logo" />
          <p className='presss-description'>
            An Iraqi Catholic leader has strongly denied an allegation of complicity in the 2014 kidnapping of a businesswoman, after a lawsuit filed this month in a U.S. court. The complaint, filed Feb. 13 in the United States District Court for the Eastern District of Virginia, alleges that Archbishop Bashar Warda "facilitated, through his connections to Iran-backed militias such as Rayan al Kildani's Babylon Brigades, the scheme to extort, kidnap, torture, and attempt to kill" the plaintiff, Sara Saleem.
          </p>
          <a href='https://www.pillarcatholic.com/p/iraqi-archbishop-categorically-denies' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={church} alt="Church Times" className="geopolitics-logo" />
          <p className='presss-description'>
            THE Chaldean Catholic Archbishop of Erbil, in Iraq, Mar Bashar Warda, has denied allegations made in a US lawsuit that he was complicit in the kidnapping and torture of an Iraqi-US businesswoman, Sara Saleem.
          </p>
          <a href='https://www.churchtimes.co.uk/articles/2025/14-march/news/world/chaldean-catholic-archbishop-denies-us-lawsuit-claims-of-complicity-in-kidnap-and-torture' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={premier} alt="Premier Christian News" className="premier" />
          <p className='presss-description'>
            The Chaldean Catholic Archbishop of Erbil has strongly denied allegations in a US lawsuit accusing him of involvement in the kidnapping and torture of Iraqi-American businesswoman Sara Saleem.
          </p>
          <a href='https://premierchristian.news/en/news/article/chaldean-archbishop-torture-allegations-us-lawsuit' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={tablet} alt="The Tablet" className="tablet" />
          <p className='presss-description'>
            Archbishop Bashar Warda said it was 'shameful and disgraceful to suggest that I am using the Vatican as a reference to influence a judicial decision'. A Kurdish-American businesswoman who has made allegations of corruption against Archbishop Bashar Warda of Erbil said the Vatican should suspend him and launch its own investigation.
          </p>
          <a href='https://www.thetablet.co.uk/news/iraqi-bishop-rejects-claim-he-invoked-vatican-authority-in-corrupt-court-dealings/' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <img src={blitz} alt="Weekly Blitz" className="tablet" />
          <p className='presss-description'>
            Since the demise of strongman Saddam Hussein, it is fair to say that Iraq's judicial system has undergone significant changes. At first, says a new report from the Iraq Watch Group of the Middle East Centre of the London School of Economics (LSE), the reforms appeared to create a more independent judiciary. However, the truth quickly emerged that it has instead become increasingly centralized and politicized.
          </p>
          <a href='https://weeklyblitz.net/2025/04/19/saleem-case-exposes-zidans-corruption-of-iraq/' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item'>
          <p className='policy'>INTERNATIONAL POLICY DIGEST</p>
          <p className='presss-description'>
            I often find myself reflecting on the course my life has taken—especially since my long and ongoing battle against a corrupt judicial system in Iraq began more than a decade ago. What began as a dream to contribute to Iraq's growth and recovery gradually morphed into a nightmare—one in which my efforts were systematically dismantled by those in power.
          </p>
          <a href='http://intpolicydigest.org/exposing-zidan-s-corruption-of-iraq-a-personal-account/' className='presss-link'>Learn more →</a>
        </div>
        
        <div className='presss-item1'>
          <img src={Ap} alt="Amsterdam & Partners" className="ap" />
          <p className='presss-description1'>
            WASHINGTON DC, March 2, 2025 – Robert Amsterdam, an international lawyer and member of the legal team representing Sara Saleem, has hailed a groundbreaking new report published by the Iraq Watch Group of the Middle East Centre of the London School of Economics.
          </p>
          <a href='https://amsterdamandpartners.com/press-release-lawyer-robert-amsterdam-hails-new-report-from-london-school-of-economics-condemning-judicial-corruption-under-iraqi-supreme-court-justice-faiq-zaidan/' className='presss-link1'>Learn more →</a>
          
          <p className='presss-description1'>
            Legal team continues fight for fairness, transparency, and the rule of law, working with local Iraqi councils and international partners to ensure impartial judicial process. WASHINGTON DC, March 2, 2025 – The legal team representing Sara Saleem has announced that the motion to recuse Judge Satar Warwar, the presiding judge in her case, was unjustly denied.
          </p>
          <a href='https://amsterdamandpartners.com/press-release-legal-team-for-sara-saleem-appeals-denial-of-motion-to-recuse-unjust-judge-satar-warwar/' className='presss-link1'>Learn more →</a>
          
          <p className='presss-description1'>
            WASHINGTON DC, February 2, 2025 – The international legal team representing Sara Saleem has filed a lawsuit in a US federal court against the Iraqi judge Faiq Zidan and a series of other senior government officials under the US Anti-Terrorism and Torture Victims Protection Acts, accusing them of "brutal acts of extortion, kidnapping, torture, and attempted murder." Saleem, a U.S. citizen.
          </p>
          <a href='https://amsterdamandpartners.com/press-release-lawyers-for-sara-saleem-announce-filing-of-us-lawsuit-alleging-kidnapping-and-judicial-corruption-in-iraq/' className='presss-link1'>Learn more →</a>
          
          <p className='presss-description1'>
            LONDON, January 18th, 2025 – Just before the inauguration of 47th President of the United States, Donald Trump takes place in Washington D.C., attorney Robert Amsterdam, Founding Partner of Amsterdam & Partners LLP, denounces the latest actions of Iraqi judge Faiq Zidan, who is a foreign judge notable for issuing an arrest warrant against the U.S. President.
          </p>
          <a href='https://amsterdamandpartners.com/press-release-before-u-s-presidential-inauguration-lawyer-for-prominent-iraqi-american-investor-sara-saleem-denounces-iraqi-chief-justice-who-issued-arrest-warrant-for-trump/' className='presss-link1'>Learn more →</a>
          
          <p className='presss-description1'>
            WASHINGTON DC, December 17, 2024 – "Our firm is privileged to be retained with respect to a matter of grave import to the Iraqi people. The ongoing attempt by Iran-related judicial and political figures to expropriate Ms. Saleem's assets represents a descent into judicial chaos and amorality," states Robert Amsterdam, founding partner of the firm.
          </p>
          <a href='https://amsterdamandpartners.com/press-release-amsterdam-partners-llp-hired-by-prominent-iraqi-investor-sara-saleem/' className='presss-link1'>Learn more →</a>
        </div>
        
        <div className='presss-item2'>
          <img src={crux} alt="Crux" className="tablet" />
          <p className='presss-description'>
            ROME – An Iraqi-American woman has named Chaldean Catholic Archbishop Bashar Warda in a federal lawsuit in the United States over claims about his personal, political, and business ties to what is essentially the Iraqi mafia.
          </p>
          <a href='https://cruxnow.com/church-in-the-middle-east/2025/03/erbil-archbishop-named-in-federal-lawsuit-targeting-iraqi-mob' className='presss-link'>Learn more →</a>
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