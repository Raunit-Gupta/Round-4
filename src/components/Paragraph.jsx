import React from "react";
import { useInView } from "react-intersection-observer";
import {motion}  from "framer-motion";
const Paragraph = ({ phrases , className }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.65,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={``}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`overflow-hidden ${className}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default Paragraph;
