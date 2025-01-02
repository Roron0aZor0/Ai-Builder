import React, { useState } from 'react';
import './GoLiveSection.css';

const GoLiveSection = () => {
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = () => {
    setIsPublished(true);
    setTimeout(() => {
      setIsPublished(false); // Reset for demonstration
    }, 3000);
  };

  return (
    <div className="go-live-section">
      <h1>Go Live with One Click</h1>
      <p>
        Publish your website instantly and share it with the world. Our hosting ensures top-notch
        performance, security, and reliability.
      </p>

      {!isPublished ? (
        <button onClick={handlePublish} className="publish-button">
          Go Live Now
        </button>
      ) : (
        <div className="publish-feedback">
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/4955862/rocket-launch.gif"
            alt="Publishing..."
            className="publish-animation"
          />
          <p>Your website is live!</p>
        </div>
      )}
    </div>
  );
};

export default GoLiveSection;
