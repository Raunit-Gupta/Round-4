import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const MovingTextSvg = () => {
  return (
    <div className='h-full w-full overflow-hidden font-[Gilroy]'>
      {/* SVG Path and Moving Text */}
      <div className="h-[10vh] w-full"></div>

      <SvgFile />
    </div>
  );
};

export default MovingTextSvg;

const SvgFile = () => {
    const containerRef = useRef(null)
    const textref = useRef([]);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],     // th starting of the animation is the start of the container and the bottom of the window and the stop position is the end of the container and the end of the window respectively
    })

    useEffect(() => {
        scrollYProgress.on('change', e =>{
            textref.current.forEach((text, i) => {
                text.setAttribute('startOffset', -40 + (i *40) + (e * 40) + '%');
            })
        })
    }, [])
  return (
    <div ref={containerRef}>
      <svg className=' mb-28'
        id='curve'
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 10 800 400"
      >
        {/* Curve Path */}
        <path
          id="curvePath"
          d="M-0.17922240495681763,397.31182861328125C108.46324903458357,325.1478497314453,133.36915545254945,153.48118194580078,368.100341796875,152.68817138671875C602.8315281412006,151.89516082763672,669.4309994506837,323.2526889038086,795.5197143554688,394.6236572265625"
          fill="none"
          
          strokeWidth={1}
          strokeLinecap="round"
          transform="matrix(1.07524551995437,-1.1102230246251565e-16,-0.18959479605385707,1.0752455199543702,24.54517062338914,-95.6910413624397)"
        />
        {/* Text following the curve */}
        <text fill="red"  >
            {
                [...Array(3)].map((_, i) => (
                       <textPath key={i} ref={ref => textref.current[i] = ref} 
                    className='text-2xl  ' href="#curvePath" startOffset={i * 40 + '%'}>
                    My Name is Raunit Gupta
                  </textPath>
                ))
            }
        </text>
      </svg>
      {/* <div className="h-[10vh] w-full"></div> */}
      <Sticky scrollProgress={scrollYProgress} />
    </div>
  );
};


const Sticky = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0,1], [-350, 0])
    return(
        <div className="h-[20vh] w-full bg-black overflow-hidden">
            <motion.div style={{y}} className=' h-full w-full flex justify-around text-white items-center'>
                {
                    [...Array(3)].map((_, i) => (
                        <h1>Raunit</h1>
                    ))

                }
            </motion.div>
        </div>
    )
}