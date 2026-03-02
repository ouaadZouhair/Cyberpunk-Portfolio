import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// Use forwardRef to control animation from parent
const ScrambleHover = forwardRef(({ children, className = "" }, ref) => {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef(null);

  // Expose a function to start the animation
  useImperativeHandle(ref, () => ({
    scramble: () => {
      let iteration = 0;
      const text = children;

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

        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
        }
      }, 30);
    },
  }));

  return <span className={className}>{displayText}</span>;
});

export default ScrambleHover;