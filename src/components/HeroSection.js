import React from 'react';
import '../App.css';
import './Button.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <div class="column" id="hero-content">
                <div class="text-content">
                    <h4 class="function-title">Digital product designer</h4>
                    <h1 class="hero-title"> I do research to meet expetations and reach bussines goals  </h1>
                    <div className="hero-btns">
                        <a href="/Projects">
                            <button class="btn-hero-left">See projects</button>
                        </a>
                        <a href="/AboutMe">
                            <button class="btn-hero-right">About me</button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="column" id="hero-image">
                <img class="hero-section-image" src='images/hero-section-image.png'/>
            </div>
        </div>
    );
}

export default HeroSection;
