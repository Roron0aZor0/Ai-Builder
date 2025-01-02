import React from 'react';
import './pricing-hero.css';
import { CTAButton } from './CTA-button';
import PricingPlans from './Pricing-plans';
const PricingHero = () => {
    return (
        <div className="pricing-hero">
            <div className="pricing-hero-content">
                <h1>Flexible Pricing for Everyone</h1>
                <p>Start small, scale big. Choose a plan tailored to your needs.</p>
                <CTAButton onClick={() => {
                    const pricingSection = document.getElementById('pricing-plans');
                    if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }} text="Find your plans" />
                
            </div> 

        
        </div>

        
       
        
    );
};

export default PricingHero;