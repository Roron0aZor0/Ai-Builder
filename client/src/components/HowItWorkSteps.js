import React from 'react';
import './HowItWorkSteps.css';
import PickTemplate from './PickTemplate';
import DragAndDrop from './Drag-and-drop';
import SmartIntegrations from './SmartIntegrations';
import PreviewSection from './PreviewSection';
import GoLiveSection from './GoLiveSection';
const HowItWorkSteps = () => {
    return (
        <div className="how-it-works">
            <h2>Our Simple Process</h2>
            <p>Follow these easy steps to create your perfect website:</p>
            <ol>
                <li>
                    {/* <h3>Pick a Template That Fits Your Brand</h3>
                    <p>
                        Browse our curated collection of professional designs and select the one that resonates with your vision. Whether it’s for e-commerce, portfolios, or business, we’ve got you covered.
                    </p> */}
                   <PickTemplate />
                </li>
                <li>
                    {/* <h3>Personalize Your Website Effortlessly</h3>
                    <p>
                        Use our intuitive drag-and-drop editor to modify layouts, colors, fonts, and more—no coding required. Bring your unique ideas to life in minutes.
                    </p> */}
                    <DragAndDrop />

                </li>
                <li>
                    {/* <h3>Enhance with Smart Integrations</h3>
                    <p>
                        Incorporate AI tools like chatbots, analytics, and SEO recommendations to optimize performance and engagement for your audience.
                    </p> */}
                    <SmartIntegrations />
                </li>
                <li>
                    {/* <h3>Ensure Everything is Perfect</h3>
                    <p>
                        Preview your website across different devices and tweak any details. Our built-in tools will highlight areas for improvement to make sure your site shines.
                    </p> */}
                    <PreviewSection />  
                </li>
                <li>
                    {/* <h3>Go Live with One Click</h3>
                    <p>
                        Publish your website instantly and share it with the world. Our hosting ensures top-notch performance, security, and reliability.
                    </p> */}
                    <GoLiveSection />   
                </li>
            </ol>
        </div>
    );
};

export default HowItWorkSteps;