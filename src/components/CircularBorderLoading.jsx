import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CircularDiv = () => {
  const controls = useAnimation();
  const [isCompleted, setIsCompleted] = useState(false);

  const circleRadius = 35;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const handleMouseDown = () => controls.start({
    strokeDashoffset: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => setIsCompleted(true),
    }
  });

  const handleMouseUp = () => {
    setIsCompleted(false);
    controls.start({ strokeDashoffset: circleCircumference });
  };

  const handleMouseLeave = () => {
    setIsCompleted(false);
    controls.start({ strokeDashoffset: circleCircumference });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black fixed">
      {!isCompleted && (
        <motion.svg
          width="50vmin"
          height="50vmin"
          viewBox="0 0 100 100"
          className="relative focus:outline-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          initial={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r={circleRadius}
            fill="transparent"
            stroke="white"
            strokeWidth="0.2px"
            strokeDasharray={circleCircumference}
            initial={{ strokeDashoffset: circleCircumference }}
            animate={controls}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}
      <h1 className="absolute text-white text-lg md:text-xl lg:text-2xl">Loading...</h1>
    </div>
  );
};

export default CircularDiv;
