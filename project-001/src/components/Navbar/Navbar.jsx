import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaTypo3} from 'react-icons/fa';
import {FiX, FiMenu} from 'react-icons/fi'
import './Navbar.css';

import {Button} from './../Button/Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth < 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();        
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        SITE                             
                        <FaTypo3 className='fa-typo3' />                         
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FiX className="fi-x"/> : <FiMenu className="fi-menu"/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className='nav-link' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className='nav-link' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className='nav-link' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className='nav-link' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>{button && <Button buttonStyle='btn-outline' >Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
