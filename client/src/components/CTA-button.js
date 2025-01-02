import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CTAButton component that renders a call-to-action button.
 * 
 * @component
 * @example
 * return (
 *   <CTAButton to="/get-started" text="Get Started" />
 * )
 * 
 * @param {Object} props - Component props.
 * @param {string} props.to - The path to navigate to when the button is clicked.
 * @param {string} props.text - The text to display on the button.
 * @returns {JSX.Element} The rendered CTA button component.
 */
const CTAButton = ({ to, text }) => {
    return (
        <Link className="btn" style={{ backgroundColor: '#007bff', color: 'white' }} to={to}>
            {text}
        </Link>
    );
};
export { CTAButton };