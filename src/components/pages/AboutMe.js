import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';

export default function AboutMe() {
    return (
        <div>
            <div class="hero-section">
                <div class="main-container">
                    <div class="column">
                        <h1 class="about-heading"><span class="text-highlight">Hi!</span> I’m <span class="text-highlight">Bas van Iterson</span> a Designer based in the <a class="about-link" href="#">Netherlands</a>. I specialize in <span class="text-highlight">UX Design</span> and  <span class="text-highlight">UI Design</span>.</h1>
                        <div class="status-content">
                            <div class="status-item">
                                <h4 class="status-title">Status</h4>
                                <p class="status-description">Avaliable for <br></br> partime work</p>
                            </div>
                            <div class="status-item">
                                <h4 class="status-title">Study progression</h4>
                                <p class="status-description">Year 3/4</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                    </div>
                </div>
            </div>
            <section class="characteristics">
                <div class="flex-container">
                    <div class="flex-item">
                        <div class="icon-image">
                            <img class="icon" src="images/passion_icon.png"></img>
                        </div>
                        <h3 class="icon-title">Passion for design</h3>
                        <p class="icon-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat laboris nisi ut aliquip. </p>
                    </div>
                    <div class="flex-item">
                        <div class="icon-image">
                            <img class="icon" src="images/costom_icon.png"></img>
                        </div>
                        <h3 class="icon-title">Custom made</h3>
                        <p class="icon-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat laboris nisi ut aliquip. </p>
                    </div>
                    <div class="flex-item">
                        <div class="icon-image">
                            <img class="icon" src="images/building_icon.png"></img>
                        </div>
                        <h3 class="icon-title">Building inovation</h3>
                        <p class="icon-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat laboris nisi ut aliquip. </p>
                    </div>
                </div>
            </section>
            <section class="about">
                <div class='image-container'>
                    <img class="about-image" src="images/about.jpg"></img>
                </div>
            </section>
            <section class="My-process">
                <div class='container'>
                    <h2 class="heading">My process</h2>
                    <div class="process-content">
                        <h4 class="process-title">Discovering the problem, goals and the solution</h4>
                        <p class="process-text">Defining the problem to establish and execute goals to come up with a solution that meets bussnies goals is a very important for me within the proces.  </p>
                    </div>
                    <div class="process-content">
                        <h4 class="process-title">Learning about the user using the (excisting) product</h4>
                        <p class="process-text">Doing research and gaining new insights of the user is a very important aspect in the proces of creating a product. This results in discovering (new) problems, goals and insights what will result in a better digital product.</p>
                    </div>
                    <div class="process-content">
                        <h4 class="process-title">Defining and iterating on digital concepts</h4>
                        <p class="process-text">Iteration is very important to explore different solutions within the proces of creation digital products. This will also result in a funnel effect where I pick the best options which will result in a defined prototype.</p>
                    </div>
                    <div class="process-content">
                        <h4 class="process-title">Building and testing custom prototypes</h4>
                        <p class="process-text">Within designing a digital product I test my prototypes by going through the design and clicking through the prototype. It’s important to make it as realistic as possible to conduct the best tests. Making everything clickable and creating a flow is very important to create tangable concepts.</p>
                    </div>
                     <div class="process-content">
                        <h4 class="process-title">Delivering awesome and usable interfaces</h4>
                        <p class="process-text">When I deliver the final design It’s a realtime high fidelity prototype which you can go through and is a realistic overview of what the digital product is going to be. This is the most excisting fase where I always remember how much I love this profession!</p>
                    </div>
                </div>
            </section>    
        </div>
    )
}