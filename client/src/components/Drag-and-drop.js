import React, { useState } from "react";
import "./Drag-and-drop.css";

const DragAndDrop = () => {
  const [components] = useState([
    { id: 1, type: "Header", content: "Header" },
    { id: 2, type: "Paragraph", content: "This is a paragraph." },
    { id: 3, type: "Image", content: "Image Placeholder" },
  ]);

  const [layout, setLayout] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  const onDragStart = (e, component) => {
    e.dataTransfer.setData("component", JSON.stringify(component));
  };

  const onDrop = (e) => {
    const component = JSON.parse(e.dataTransfer.getData("component"));
    setLayout([...layout, { ...component, id: Date.now() }]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const editComponent = (id) => {
    const newContent = prompt("Edit content:");
    if (newContent) {
      setLayout((prevLayout) =>
        prevLayout.map((item) =>
          item.id === id ? { ...item, content: newContent } : item
        )
      );
    }
  };

  const resetLayout = () => {
    setLayout([]);
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div className="drag-and-drop">
      <div className="effortless-design">
        <h2>Effortless Design Tools</h2>
        <p>
          Design and launch your website in no time with our intuitive drag-and-drop builder.
        </p>
        <div className="toolbar">
          <button onClick={togglePreview}>
            {isPreview ? "Edit Mode" : "Preview Mode"}
          </button>
          <button onClick={resetLayout}>Reset Layout</button>
        </div>
      </div>

      {!isPreview && (
        <div className="drag-drop-container">
          {/* Components Section */}
          <div className="components">
            <h3>Components</h3>
            {components.map((component) => (
              <div
                key={component.id}
                draggable
                onDragStart={(e) => onDragStart(e, component)}
                className="component"
              >
                {component.content}
              </div>
            ))}
          </div>

          {/* Layout Section */}
          <div className="layout" onDrop={onDrop} onDragOver={onDragOver}>
            <h3>Layout</h3>
            {layout.length === 0 && (
              <p className="placeholder">Drag components here to start building!</p>
            )}
            {layout.map((component, index) => (
              <div
                key={component.id}
                className="layout-component"
                onDoubleClick={() => editComponent(component.id)}
              >
                {component.content}
              </div>
            ))}
          </div>
        </div>
      )}

      {isPreview && (
        <div className="layout preview-mode">
          <h3>Preview</h3>
          {layout.map((component) => (
            <div key={component.id} className="layout-component">
              {component.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
