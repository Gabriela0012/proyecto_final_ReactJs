import React from 'react';
import './Globe.css';

function Globe({ children, isButton, onGlobeClick }) {
  return (
    <div className={`globe ${isButton ? 'globe-button' : ''}`} onClick={() => isButton && onGlobeClick()}>
        { children }
    </div>
  )
}

export default Globe