import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Navbar.css';

const Navbar= () =>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton()
  }, []);

    return (
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        [Site Name]
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links'>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to="/groups" className='nav-links'>My Groups</Link>
          </li>
          <li className='nav-item'>
            <Link to="/goals" className='nav-links'>My Goals</Link>
          </li>
          <li className='nav-item'>
            <Link to="/messages" className='nav-links'>Messages</Link>
          </li>
          <li className='nav-item'>
            <Link to="/quizzes" className='nav-links'>Quizzes</Link>
          </li>
          <li className='nav-item'>
            <Link to="/tips" className='nav-links'>Tips</Link>
          </li>
          </ul>
        </div>
      </nav>
    );
  }
  export default Navbar;