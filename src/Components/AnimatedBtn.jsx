import React, { useRef } from "react";
import ScrambleHover from "./ScrambleHover";

const AnimatedBtn = ({ text, onClick, className = "", textColor = "", submit = false }) => {
  const scrambleRef = useRef(null);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => scrambleRef.current.scramble()} // animation triggers when hovering the button
      className={`${className}`}
      type={submit ? "submit" : "button"}
    >
      <ScrambleHover ref={scrambleRef} className={textColor}>
        {text}
      </ScrambleHover>
    </button>
  );
};

export default AnimatedBtn;