import React from 'react';
import './Split.css';

const SplitText = ({ text }) => {
  return (
    <h1 className="split-text">
      {text.split('').map((char, i) => (
        <i
          key={i}
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char}
        </i>
      ))}
    </h1>
  );
};

export default SplitText;