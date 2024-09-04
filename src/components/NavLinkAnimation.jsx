
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLinkAnimation = ({ children , className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const chars = [...children];
  

  return (
    <motion.a
      initial="initial"
      animate={isClicked ? "hovered" : "initial"}
      whileHover="hovered"
      onClick={handleClick}
      className={`relative  block overflow-hidden whitespace-nowrap`}
      style={{
        lineHeight: 1,
        cursor: "pointer",
      }}
    >
      <div className={``}>
        {chars.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === "-" ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className={`absolute inset-0`}>
        {chars.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === "-" ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default NavLinkAnimation;


