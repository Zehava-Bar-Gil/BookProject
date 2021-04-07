import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css';
import { Button } from '../Button/Button';
import { GiBookCover } from 'react-icons/gi';
import { TiHomeOutline } from 'react-icons/ti';
import { BiSearchAlt } from 'react-icons/bi';
import { BiHeart } from 'react-icons/bi';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <GiBookCover/>B-Libary
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home <TiHomeOutline/>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/finder'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Finder <BiSearchAlt/>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/wish-list'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Wish-list <BiHeart/>
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
