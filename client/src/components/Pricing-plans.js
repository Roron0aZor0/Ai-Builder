import React, { useState } from 'react';
import './Pricing-plans.css';
import { CTAButton } from './CTA-button';

const PricingPlans = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = {
        monthly: [
            {
                name: 'Starter',
                price: '$15 / mo',
                features: [
                    'Single website',
                    'Basic customization tools',
                    'Standard templates',
                    'Email support',
                ],
            },
            {
                name: 'Professional',
                price: '$39 / mo',
                features: [
                    '5 websites',
                    'Advanced customization options',
                    'Premium templates',
                    'Analytics and SEO tools',
                    'API access',
                ],
                recommended: true,
            },
            {
                name: 'Enterprise',
                price: '$99 / mo',
                features: [
                    'Unlimited websites',
                    'Full customization',
                    'Dedicated account manager',
                    'Priority support',
                    '24/7 support',
                ],
            },
        ],
        yearly: [
            {
                name: 'Starter',
                price: '$150 / yr',
                features: [
                    'Single website',
                    'Basic customization tools',
                    'Standard templates',
                    'Email support',
                ],
            },
            {
               
                name: 'Professional',
                price: '$390 / yr',
                features: [
                    '5 websites',
                    'Advanced customization options',
                    'Premium templates',
                    'Analytics and SEO tools',
                    'API access',
                ],
                recommended: true,
            },
            {
                name: 'Enterprise',
                price: '$990 / yr',
                features: [
                    'Unlimited websites',
                    'Full customization',
                    'Dedicated account manager',
                    'Priority support',
                    '24/7 support',
                ],
            },
        ],
    };

    return (
        <div className="pricing-plans" id="pricing-plans">
            <div className="billing-cycle-switch">
                <button onClick={() => setBillingCycle('monthly')} className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</button>
                <button onClick={() => setBillingCycle('yearly')} className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</button>
            </div>
            <div className="plans">
                {plans[billingCycle].map((plan, index) => (
                    <div key={index} className="plan-card">
                        <h3>{plan.name}</h3>
                        {plan.recommended && <span className="recommended">Recommended</span>}
                        <p className="price">{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <CTAButton to="/choose-plan" text="Choose Plan" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;