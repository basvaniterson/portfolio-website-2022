import React from 'react'
import '../../App.css';
import '../Slider.css';



const $slider = document.querySelector(".slider");
const $scroller = document.querySelector(".scroller");
const $slides = document.querySelectorAll(".slide");
const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");

export default function Projects() {
    return (
        <>  
            <div class="main-container">
                <div class="scroller">
                    <div class="column" id="text-column">
                        <div class="slide-text-content">
                            <h1 class="projects-heading">Explore my projects</h1>
                            <p class="projects-paragraph">Want to discover more? Check out <a class="highlight-link" href="#">the techlab</a>.</p>
                            <div class="buttons-nav">
                                <button class="arrow prev" aria-label="Previous slide">
                                    <img src="images/prev.svg"></img>
                                </button>
                                <button class="arrow next" aria-label="Next slide">
                                    <img src="images/next.svg"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="slider">
                            <div class="slide">
                                <div class="top-slide-info">
                                    <div class="slide-item">
                                        <p class="design-type">Conceptual</p>
                                    </div>
                                    <div class="slide-item">
                                        <p class="year">2022</p>
                                    </div>
                                </div>
                                <div class="slide-content">
                                    <h1 class="project-title">Runnin beats</h1>
                                    <h3 class="design-catergory">App Design</h3>
                                </div>
                                <div class="bottom-slide-info">
                                    <div class="slide-item">
                                        <a class="project-link" href="#"><span class="link-highlight">See</span> project</a>
                                    </div>
                                    <div class="slide-item">
                                        <a class="link-arrow">
                                            <img class="slide-arrow" src="images/slide-arrow.svg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="top-slide-info">
                                    <div class="slide-item">
                                        <p class="design-type">Conceptual</p>
                                    </div>
                                    <div class="slide-item">
                                        <p class="year">2022</p>
                                    </div>
                                </div>
                                <div class="slide-content">
                                    <h1 class="project-title">Runnin beats</h1>
                                    <h3 class="design-catergory">App Design</h3>
                                </div>
                                <div class="bottom-slide-info">
                                    <div class="slide-item">
                                        <a class="project-link" href="#"><span class="link-highlight">See</span> project</a>
                                    </div>
                                    <div class="slide-item">
                                        <a class="link-arrow">
                                            <img class="slide-arrow" src="images/slide-arrow.svg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="top-slide-info">
                                    <div class="slide-item">
                                        <p class="design-type">Conceptual</p>
                                    </div>
                                    <div class="slide-item">
                                        <p class="year">2022</p>
                                    </div>
                                </div>
                                <div class="slide-content">
                                    <h1 class="project-title">Runnin beats</h1>
                                    <h3 class="design-catergory">App Design</h3>
                                </div>
                                <div class="bottom-slide-info">
                                    <div class="slide-item">
                                        <a class="project-link" href="#"><span class="link-highlight">See</span> project</a>
                                    </div>
                                    <div class="slide-item">
                                        <a class="link-arrow">
                                            <img class="slide-arrow" src="images/slide-arrow.svg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="top-slide-info">
                                    <div class="slide-item">
                                        <p class="design-type">Conceptual</p>
                                    </div>
                                    <div class="slide-item">
                                        <p class="year">2022</p>
                                    </div>
                                </div>
                                <div class="slide-content">
                                    <h1 class="project-title">Runnin beats</h1>
                                    <h3 class="design-catergory">App Design</h3>
                                </div>
                                <div class="bottom-slide-info">
                                    <div class="slide-item">
                                        <a class="project-link" href="#"><span class="link-highlight">See</span> project</a>
                                    </div>
                                    <div class="slide-item">
                                        <a class="link-arrow">
                                            <img class="slide-arrow" src="images/slide-arrow.svg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
