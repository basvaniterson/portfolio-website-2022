import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='Footer'>
            <div class="footer-column">
                <p class="copyright-title"><span class="text-highlight">2022 Edition</span>  | Bas van Iterson</p>
            </div>
            <div class="footer-column">
                <img class="footer-icon" src="images/Dribbble_icon.svg"></img>
                <img class="footer-icon" src="images/Linkedin_icon.svg"></img>
            </div>
        </footer>
    );
}

export default Footer;