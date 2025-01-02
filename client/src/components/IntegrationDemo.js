
import React, { useState } from "react";
import { FaSlack, FaGoogle, FaBolt, FaGithub, FaMicrosoft } from "react-icons/fa";
import './IntegrationDemo.css';

const integrations = [
  { icon: <FaSlack />, name: "Slack", description: "Stay updated with Slack notifications." },
  { icon: <FaGoogle />, name: "Google Analytics", description: "Track your website performance." },
  { icon: <FaBolt />, name: "Zapier", description: "Automate workflows with Zapier." },
  { icon: <FaGithub />, name: "GitHub", description: "Collaborate with GitHub integration." },
  { icon: <FaMicrosoft />, name: "Microsoft Teams", description: "Integrate with Microsoft Teams for easy collaboration." },
];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter the integrations based on search query
  const filteredIntegrations = integrations.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="integrations">
      <h2>Seamless Integrations</h2>
      <p>Connect with over 200+ tools and services to streamline your workflows effortlessly.</p>

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Integrations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* Integration List */}
      <div className="integrations-grid">
        {filteredIntegrations.length > 0 ? (
          filteredIntegrations.map((tool, index) => (
            <div key={index} className="integration-item" title={tool.description}>
              <div className="icon">{tool.icon}</div>
              <p>{tool.name}</p>
            </div>
          ))
        ) : (
          <p>No integrations found</p>
        )}
      </div>
    </div>
  );
};

export default Integrations;
