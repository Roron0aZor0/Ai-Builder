import React, { useState } from 'react';
import './Ai-interface.css';
import { FaRocket, FaSearch, FaMobileAlt } from 'react-icons/fa'; // Importing icons

const AiOptimization = () => {
    const [scores, setScores] = useState({
        performance: 50,
        seo: 40,
        responsiveness: 60,
    });
    const [optimizing, setOptimizing] = useState(false);

    const handleOptimize = () => {
        setOptimizing(true);
        const interval = setInterval(() => {
            setScores((prevScores) => {
                const updatedScores = {
                    performance: Math.min(prevScores.performance + 5, 100),
                    seo: Math.min(prevScores.seo + 4, 100),
                    responsiveness: Math.min(prevScores.responsiveness + 3, 100),
                };
                if (
                    updatedScores.performance === 100 &&
                    updatedScores.seo === 100 &&
                    updatedScores.responsiveness === 100
                ) {
                    clearInterval(interval);
                    setOptimizing(false);
                }
                return updatedScores;
            });
        }, 300);
    };

    return (
        <div className="ai-optimization">
            <h2>🚀 AI-Powered Optimization</h2>
            <p>Watch as AI improves your website's performance, SEO, and mobile responsiveness.</p>

            <div className="optimization-metrics">
                <div className="metric" title="How fast your site loads and performs.">
                    <FaRocket className="icon" />
                    <span>Performance:</span>
                    <span className="metric-score">{scores.performance}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${scores.performance}%` }}></div>
                </div>

                <div className="metric" title="Search engine optimization score.">
                    <FaSearch className="icon" />
                    <span>SEO Score:</span>
                    <span className="metric-score">{scores.seo}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${scores.seo}%` }}></div>
                </div>

                <div className="metric" title="How well your site adapts to different devices.">
                    <FaMobileAlt className="icon" />
                    <span>Responsiveness:</span>
                    <span className="metric-score">{scores.responsiveness}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${scores.responsiveness}%` }}></div>
                </div>
            </div>

            <button
                onClick={handleOptimize}
                disabled={optimizing}
                className={optimizing ? 'disabled' : ''}
            >
                {optimizing ? 'Optimizing...' : 'Optimize Now'}
            </button>
        </div>
    );
};

export default AiOptimization;
