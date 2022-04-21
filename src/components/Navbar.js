import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false); //setting false or true
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false) //function closed menu with parameter false

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo'>
                        <img class="logo-icon" src="images/Logo_bas-van-Iterson_2022.svg"></img>
                        <p class="logo-name"><span class="surname">Bas</span> van Iterson</p>
                    </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        <div class="menu-outline">
                            <i className={click ? 'gg-close' : 'gg-layout-grid'} />
                        </div>
                    </div>
                    <div className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <div class="menu-container">
                            <div class="menu-column">
                                <ul class="nav-list">
                                    <li className = 'nav-item'>
                                        <Link to='/' className='nav-links' onClick={closeMenu}>
                                            <h1 class="nav-title">Home</h1>
                                        </Link>
                                    </li>
                                    <li className = 'nav-item'>
                                        <Link to='/projects' className='nav-links' onClick={closeMenu}>
                                            <h1>Projects</h1>
                                        </Link>
                                    </li>
                                    <li className = 'nav-item'>
                                        <Link to='/techlab' className='nav-links' onClick={closeMenu}>
                                            <h1>Techlab</h1>
                                        </Link>
                                    </li>
                                    <li className = 'nav-item'>
                                        <Link to='/aboutMe' className='nav-links' onClick={closeMenu}>
                                            <h1>About</h1>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu-column">
                                <div class="sub-column">
                                    <img class="menu_profile" src="images/menu_profile.png"></img>
                                </div>
                                <div class="sub-column">
                                    <div class="sub-row">
                                        <p class="menu-title"> Bas van Iterson </p>
                                        <p class="sub-menu-title"> Digital product designer</p>
                                    </div>
                                    <div class="sub-row">
                                        <p class="menu-title">Current status </p>
                                        <p class="sub-menu-title"> Avaliable for work</p>
                                    </div>
                                    <div class="sub-row">
                                        <p class="menu-title">Resume </p>
                                        <div class="sub-row-container">
                                            <img class="download-icon" src="images/download_icon.svg"></img>
                                            <p class="sub-menu-title"> Download resume</p>
                                        </div>
                                    </div>
                                    <div class="sub-row">
                                        <p class="menu-title">Connect with me </p>
                                        <a class="email-information" href="mailto">Hello@basvaniterson.nl</a>
                                        <div class="sub-row-container">
                                            <a class="social-link" href="#">
                                                <img class="social-icon" src="images/dribbble_icon.svg"></img>
                                            </a>
                                            <a class="social-link" href="#">
                                                <img class="social-icon" src="images/Linkedin_icon.svg"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="subnavbar-container">
                <a class="sub-nav-link" href="#">
                    <div class="nav-column">
                        <img class="subnav-icon" src="images/download_icon.svg"></img>
                        <p class="download-title"><span class="text-highlight">Download</span> resume</p>
                    </div>
                </a>
                <a class="sub-nav-link" href="#">
                    <div class="nav-column">
                        <p class="connect-title"><span class="text-highlight">Connect</span></p>
                        <img class="subnav-icon" src="images/connect_icon.svg"></img>
                    </div>
                </a>
            </div>
        </> 
    );
}

export default Navbar;
