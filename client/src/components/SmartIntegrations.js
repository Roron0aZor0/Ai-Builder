import React, { useState } from 'react';
import './SmartIntegrations.css';

const SmartIntegrations = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'chatbot', message: 'Hello! How can I assist you today?' },
  ]);
  const [analyticsData, setAnalyticsData] = useState({ pageViews: 1200, bounceRate: 34, avgSession: '3:45' });
  const [seoRecommendations, setSeoRecommendations] = useState([
    { title: 'Optimize title tags', isCompleted: false },
    { title: 'Use descriptive alt text for images', isCompleted: false },
    { title: 'Improve page load speed', isCompleted: false },
  ]);
  const [isPreview, setIsPreview] = useState(false);

  const handleChatbotToggle = () => setShowChatbot(!showChatbot);
  
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Add user message to chat history
      setChatHistory([
        ...chatHistory,
        { sender: 'user', message: userMessage },
      ]);
      
      // Simulate a chatbot response after a delay
      setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'chatbot', message: 'I can assist you with setting up your site and more!' },
        ]);
      }, 1000); // Delay for chatbot response
    }
    setUserMessage('');
  };

  return (
    <div className="smart-integrations dark-theme">
      <h2>Enhance with Smart Integrations</h2>
      <p>Incorporate AI tools like chatbots, analytics, and SEO recommendations to optimize performance and engagement for your audience.</p>

      {/* Chatbot Section */}
      <div className="integration-card">
        <h2>AI Chatbot Integration</h2>
        <button onClick={handleChatbotToggle} className="btn-primary">
          {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
        </button>
        {showChatbot && (
          <div className="chatbot-demo">
            <div className="chat-history">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="btn-secondary">
              Send
            </button>
          </div>
        )}
      </div>

      {/* Analytics and SEO Sections */}
      <div className="integration-card">
        <h2>Analytics Integration</h2>
        <div className="analytics-dashboard">
          <div className="metric">
            <h3>Page Views</h3>
            <p>{analyticsData.pageViews}</p>
          </div>
          <div className="metric">
            <h3>Bounce Rate</h3>
            <p>{analyticsData.bounceRate}%</p>
          </div>
          <div className="metric">
            <h3>Avg. Session Duration</h3>
            <p>{analyticsData.avgSession}</p>
          </div>
        </div>
        <div className="analytics-graph">
          {isPreview ? (
            <div>
              {/* Replace this with a dynamic graph component */}
              <p>Graph preview of analytics data</p>
            </div>
          ) : (
            <p>Click below to preview analytics data in graph form.</p>
          )}
          <button onClick={() => setIsPreview(!isPreview)} className="btn-primary">Preview Graph</button>
        </div>
        <div className="integration-demo-footer">
          <button className="btn-primary">Try it Now</button>
          <p>Get started with real-time analytics tracking for your site.</p>
        </div>
      </div>

      <div className="integration-card">
        <h2>SEO Recommendations</h2>
        <div className="seo-recommendations">
          {seoRecommendations.map((rec, index) => (
            <div
              key={index}
              className={`recommendation ${rec.isCompleted ? 'completed' : ''}`}
              onClick={() => {
                const updatedRecommendations = [...seoRecommendations];
                updatedRecommendations[index].isCompleted = !updatedRecommendations[index].isCompleted;
                setSeoRecommendations(updatedRecommendations);
              }}
            >
              <p>{rec.title}</p>
              <span>{rec.isCompleted ? '✓ Completed' : 'Pending'}</span>
            </div>
          ))}
        </div>
        <div className="integration-demo-footer">
          <button className="btn-primary">Optimize Now</button>
          <p>Implement SEO recommendations with one click for better ranking.</p>
        </div>
      </div>
    </div>
  );
};

export default SmartIntegrations;
