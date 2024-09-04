


// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const TextIntersectionObserver = ({ children, className }) => {
//   const animation = {
//     initial: { opacity: 0 },
//     enter: (i) => ({
//       opacity: 1,
//       transition: {
//         duration: 0.95,
//         ease: [0.33, 1, 0.68, 1],
//         delay: 0.05 * i, // Adjust delay as needed
//       },
//     }),
//   };

//   const { ref, inView } = useInView({
//     threshold: 0.75,
//     triggerOnce: true,
//   });

//   return (
//     <div className="">
//       {children.map((phrase, index) => (
//         <motion.div
//           key={index}
//           ref={ref}
//           className={`overflow-hidden ${className}`}
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.95, ease: [0.33, 1, 0.68, 1] }}
//           variants={{
//             animate: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           <p>
//             {phrase.split(" ").map((word, wordIdx) => (
//               <span key={wordIdx} className="inline-block">
//                 {word.split("").map((char, charIdx) => (
//                   <motion.span
//                     key={charIdx}
//                     custom={charIdx}
//                     variants={animation}
//                     initial="initial"
//                     animate={inView ? "enter" : ""}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//                 {/* Add space between words */}
//                 {wordIdx < phrase.split(" ").length - 1 && <span>&nbsp;</span>}
//               </span>
//             ))}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default TextIntersectionObserver;









import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const TextIntersectionObserver = ({ children, className }) => {
  const animation = {
    initial: { color: "red" },
    enter: (i) => ({
      color: "white",
      transition: {
        duration: 0.95,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.09 * i, // Stagger delay
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: false,
  });

  return (
    <div className="">
      {children.map((phrase, index) => (
        <motion.div
          key={index}
          ref={ref}
          className={`overflow-hidden ${className}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.95, ease: [0.33, 1, 0.68, 1] }}
        >
          <p>
            {phrase.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    custom={charIdx}
                    variants={animation}
                    initial="initial"
                    animate={inView ? "enter" : "initial"}
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Add space between words */}
                {wordIdx < phrase.split(" ").length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default TextIntersectionObserver;
