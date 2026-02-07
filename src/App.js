import React, { useState } from 'react';
import './App.css';

function App() {
  const [noSize, setNoSize] = useState(100);
  const [accepted, setAccepted] = useState(false);

  const handleNo = () => {
    setNoSize(prev => Math.max(prev * 0.75, 15));
  };

  const handleYes = () => {
    setAccepted(true);
  };

  return (
    <div className="App">
      <h1 className="question">Will you be my Valentine?</h1>
      
      <div className={`bear ${accepted ? 'dancing' : ''}`}>
        <svg viewBox="0 0 200 200" className="bear-svg">
          {/* Head */}
          <circle cx="100" cy="100" r="40" fill="#2a2a2a" />
          
          {/* Ears */}
          <circle cx="75" cy="75" r="18" fill="#2a2a2a" />
          <circle cx="125" cy="75" r="18" fill="#2a2a2a" />
          
          {/* Inner ears */}
          <circle cx="75" cy="75" r="10" fill="#4a4a4a" />
          <circle cx="125" cy="75" r="10" fill="#4a4a4a" />
          
          {/* Eyes */}
          <circle cx="88" cy="95" r="4" fill="#fff" />
          <circle cx="112" cy="95" r="4" fill="#fff" />
          
          {/* Snout */}
          <ellipse cx="100" cy="108" rx="12" ry="10" fill="#4a4a4a" />
          
          {/* Nose */}
          <circle cx="100" cy="105" r="4" fill="#1a1a1a" />
          
          {/* Mouth */}
          <path d="M 100 105 Q 95 112 90 110" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          <path d="M 100 105 Q 105 112 110 110" stroke="#1a1a1a" strokeWidth="2" fill="none" />
          
          {/* Body */}
          <ellipse cx="100" cy="160" rx="35" ry="30" fill="#2a2a2a" />
          
          {/* Arms */}
          <ellipse cx="70" cy="155" rx="12" ry="25" fill="#2a2a2a" transform="rotate(-20 70 155)" />
          <ellipse cx="130" cy="155" rx="12" ry="25" fill="#2a2a2a" transform="rotate(20 130 155)" />
          
          {/* Legs */}
          <ellipse cx="85" cy="185" rx="10" ry="15" fill="#2a2a2a" />
          <ellipse cx="115" cy="185" rx="10" ry="15" fill="#2a2a2a" />
        </svg>
      </div>
      
      {!accepted ? (
        <div className="buttons">
          <button className="yes-btn" onClick={handleYes}>
            Yes
          </button>
          <button 
            className="no-btn" 
            onClick={handleNo}
            style={{ 
              fontSize: `${noSize}%`,
              padding: `${noSize / 8}px ${noSize / 4}px`
            }}
          >
            No
          </button>
        </div>
      ) : (
        <div className="celebration">
          <h2>I knew you'd say yes!</h2>
        </div>
      )}
    </div>
  );
}

export default App;