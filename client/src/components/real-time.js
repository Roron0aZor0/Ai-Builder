import React, { useState } from 'react';
import { SketchPicker } from 'react-color'; // For the color picker
import ReactSlider from 'react-slider'; // For the slider
import './real-time.css';
const StyleCustomizationPanel = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  return (
    <div className="style-customization-panel">
      <h3>Customize Your Website</h3>

      <div className="color-picker">
        <h4>Background Color</h4>
        <SketchPicker color={backgroundColor} onChangeComplete={handleColorChange} />
      </div>

      <div className="font-size">
        <h4>Font Size</h4>
        <ReactSlider
          min={12}
          max={36}
          value={fontSize}
          onChange={handleFontSizeChange}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}px</div>}
        />
      </div>

      <div className="font-family">
        <h4>Font Family</h4>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      <div className="preview">
        <h2 style={{ fontSize: `${fontSize}px`, backgroundColor, fontFamily }}>
          Live Customization Preview
        </h2>
      </div>
    </div>
  );
};

export default StyleCustomizationPanel;
