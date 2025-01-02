import React from 'react';
import PricingPlans from '../components/Pricing-plans';
import ComparePlans from '../components/Compare-plans';
import PricingHero from '../components/pricing-hero';
import FAQ from './FAQ'; // Assuming this is your FAQ component
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Compare Plans Section */}
      <ComparePlans />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Choose Your Plan?</h2>
        <p>Start using our platform today and enjoy seamless website creation with the perfect plan for you.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Choose Your Plan</button>
          <button className="cta-button secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
