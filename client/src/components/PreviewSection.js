import React, { useState } from 'react';
import './PreviewSection.css';

const devicePreviews = [
  { id: 1, name: 'Desktop View', img: 'https://cdn.dribbble.com/userupload/7237622/file/original-8d2612b33cb266fc48b8f75259db7e3e.png?resize=752x&vertical=center' },
  { id: 2, name: 'Tablet View', img: 'https://cdn.dribbble.com/userupload/7237622/file/original-8d2612b33cb266fc48b8f75259db7e3e.png?resize=400x&vertical=center' },
  { id: 3, name: 'Mobile View', img: 'https://via.placeholder.com/150x300?text=Mobile+Preview' },
];

const PreviewSection = () => {
  const [selectedDevice, setSelectedDevice] = useState(devicePreviews[0]);

  const handleDeviceChange = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="preview-section">
      <h1>Ensure Everything is Perfect</h1>
      <p>
        Preview your website across different devices and tweak any details. Our built-in tools will
        highlight areas for improvement to make sure your site shines.
      </p>

      <div className="device-selector">
        {devicePreviews.map((device) => (
          <button
            key={device.id}
            className={`device-button ${selectedDevice.id === device.id ? 'active' : ''}`}
            onClick={() => handleDeviceChange(device)}
          >
            {device.name}
          </button>
        ))}
      </div>

      <div className="device-preview">
        <img src={selectedDevice.img} alt={selectedDevice.name} />
      </div>
    </div>
  );
};

export default PreviewSection;
