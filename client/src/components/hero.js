import React from 'react';
import './hero.css';
import { CTAButton } from './CTA-button';
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-heading">Create Stunning Websites with AI in Minutes!</h1>
                <p className="hero-subtext">No coding. No hassle. Just smarter, faster, and more beautiful websites for your business.</p>
                <CTAButton to="/get-started" text="Get Started" className="cta-button-large" />
            </div>
        </section>
    );
};

export default Hero;