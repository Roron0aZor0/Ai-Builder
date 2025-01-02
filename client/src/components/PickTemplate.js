import React, { useState } from 'react';
import './PickTemplate.css';

const templates = [
  { id: 1, name: 'E-commerce Template', description: 'Perfect for online stores', img: 'https://cdn.dribbble.com/userupload/7237622/file/original-8d2612b33cb266fc48b8f75259db7e3e.png?resize=752x&vertical=center' },
  { id: 2, name: 'Portfolio Template', description: 'Showcase your work', img: 'https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148382098.jpg?t=st=1735655765~exp=1735659365~hmac=4cdaca8e946818aa9ff0568e8372a5e76702ab80c7311a60fff2a2c6f053fc48&w=740' },
  { id: 3, name: 'Business Template', description: 'Ideal for businesses', img: 'https://img.freepik.com/free-vector/gradient-business-workshop-landing-page-template_23-2149414061.jpg?t=st=1735655821~exp=1735659421~hmac=fd998f82f1775ce79924bfafd8d122841958183bb036f23ad28704c5a92cecac&w=826' },
];

const PickTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="pick-template">
      <h1>Pick a Template That Fits Your Brand</h1>
      <p>Browse our curated collection of professional designs and select the one that resonates with your vision. Whether it’s for e-commerce, portfolios, or business, we’ve got you covered.</p>

      <div className="template-list">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-item ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateClick(template)}
          >
            <img src={template.img} alt={template.name} className="template-image" />
            <div className="template-details">
              <h2>{template.name}</h2>
              <p>{template.description}</p>
              <button className="btn-choose">Choose Template</button>
            </div>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="selected-template">
          <h2>You have selected:</h2>
          <p>{selectedTemplate.name}</p>
        </div>
      )}
    </div>
  );
};

export default PickTemplate;
