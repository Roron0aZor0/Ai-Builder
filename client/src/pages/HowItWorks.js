import React from 'react';
import HowItWorkSteps from '../components/HowItWorkSteps';
import FAQ from './FAQ'; // Assuming this is a separate FAQ component
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="container">
      {/* Steps Section */}
      <HowItWorkSteps />
      
      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Create Your Website?</h2>
        <p>Start building your website today with our easy-to-use platform.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Start for Free</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
