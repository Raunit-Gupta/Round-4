import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const MomentumHorizontalCard = () => {

    const cardData = [
        {
            samllHeading: 'WE REALLY ARE',
            mainHeading: 'Those Parteners You Can Trust',
            desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptatibus qui aperiam eos nam rerum quos unde repudiandae. Ullam, nesciunt.',
        },
    ]

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["80%", "0%"])

    const blueWidth = useTransform(scrollYProgress, [.1, 1], ["0%", "100%"])
    const whiteWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div ref={containerRef} className=' h-[500vh] w-full relative font-[Gilroy] text-white  '>
        <div className=" sticky top-0 h-screen w-full bg-black flex flex-col justify-around items-center overflow-hidden ">
        <div className="  h-[20%] w-[20%] flex  flex-col  items-center pb-10 justify-center text-center ">
                <h1 className='text-sm'>HOME ABOUT US</h1>
                <p className='text-xl font-bold'>A fresh team, full of energy and ready to make big things happen</p>
            </div>

            <motion.div style={{x:y}} className="h-[40%] w-[250%] flex gap-10 relative    ">
            
            <div className="flex h-full ">
            <Cards {...cardData[0]}/>
            <Cards {...cardData[0]}/>
            <Cards {...cardData[0]}/>
            <Cards {...cardData[0]}/>
            <Cards {...cardData[0]}/>
            <Cards {...cardData[0]}/>
            
            </div>

            </motion.div>

            <div className="h-[2%] mb-10 w-[90%] rounded-3xl bg-zinc-600 relative">
                <motion.div style={{width:blueWidth}} className="absolute top-0 h-full w-full bg-blue-500 rounded-3xl"></motion.div>
                <motion.div style={{width:whiteWidth}}  className=" h-full w-full bg-white rounded-3xl"></motion.div>
            </div>

            
        </div>
          
    </div>
  )
}

export default MomentumHorizontalCard

const Cards = ({samllHeading, mainHeading, desc}) => {
    return (
        <div className="group h-[100%] w-[16vw]   bg-zinc-600 flex flex-col justify-between items-center rounded-3xl py-3 mr-10 px-3">
            <h1 className='text-sm'>{samllHeading}</h1>
            <h1 className='text-2xl text-bold text-center'>{mainHeading}</h1>
            <p className='text-center text-sm'>{desc}</p>
            <div className="h-1 w-[20%] mb-5 bg-white group-hover:scale-0 group-hover:mb-0 duration-300"></div>
        </div>
    )
}