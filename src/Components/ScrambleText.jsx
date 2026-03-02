import React, { useState, useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const ScrambleText = ({ text, className = "", style = {} }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Trigger scramble whenever `text` changes
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 3; // speed control

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
    }, 30);

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span className={className} style={{ ...style }}>
      {displayText}
    </span>
  );
};

export default ScrambleText;