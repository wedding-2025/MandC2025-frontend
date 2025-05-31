import React, { useState, useEffect } from 'react';
import '../App.css'

const WelcomeScreen = ({ isVisible, onTypingComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'Thank You For Coming!';

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
          
          // When typing is complete
          if (currentIndex > fullText.length) {
            clearInterval(intervalId);
            // Wait a moment after typing completes before triggering the callback
            setTimeout(() => {
              onTypingComplete();
            }, 200);
          }
        }
      }, 100); // Speed of typing

      return () => clearInterval(intervalId);
    }
  }, [isVisible, onTypingComplete, fullText]);

  return (
    <div className={`welcome-screen ${!isVisible ? 'fade-out' : ''}`}>
      <h1 className="welcome-text text-2xl md:text-[4rem]">
        {text}
        <span className="cursor"></span>
      </h1>
    </div>
  );
};

export default WelcomeScreen;