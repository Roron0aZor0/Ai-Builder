import React from 'react';
import '../styles/WhyChooseOurPlatform.css';
import DragAndDrop from './Drag-and-drop';
import AiOptimization from './Ai-interface';
import Integrations from './IntegrationDemo';
import StyleCustomizationPanel from './real-time'
/**
 * A functional React component that displays the reasons to choose the platform.
 * It includes several features such as Effortless Design Tools, AI-Powered Optimization,
 * Seamless Integrations, and Total Control and Flexibility.
 *
 * @component
 * @example
 * return (
 *   <WhyChooseOurPlatform />
 * )
 */
const WhyChooseOurPlatform = () => {
    return (
        
            <div className="features">
                <div className="feature">
                    {/* <h3>Effortless Design Tools</h3>
                    <p>Design and launch your website in no time with our intuitive drag-and-drop builder.</p> */}
                    <DragAndDrop />
                </div>
                <div className="feature">
                    {/* <h3>AI-Powered Optimization</h3>
                    <p>Let AI handle performance, SEO, and mobile responsiveness, ensuring a flawless experience.</p> */}
                    <AiOptimization />
                </div>
                <div className="feature">
                    {/* <h3>Seamless Integrations</h3>
                    <p>Connect with over 200+ tools and services to streamline your workflows effortlessly.</p> */}
                    <Integrations />
                </div>
                <div className="feature">
                    <h3>Total Control and Flexibility</h3>
                    <p>Enjoy advanced customization options for complete control over your website's look and functionality.</p>
                    <StyleCustomizationPanel /> 
                </div>
            </div>
        
    );
};

export default WhyChooseOurPlatform;