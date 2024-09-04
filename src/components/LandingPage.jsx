import React from 'react'
import StarsField from './StarsField'
import { Canvas } from '@react-three/fiber'
import BrainStorming from './BrainStorming'
import Paragraph from './Paragraph'
import TextIntersectionObserver from './TextIntersectionObserver'

const LandingPage = () => {
  return (
    <div className=' h-screen relative w-full text-white bg-black font-["aeronaut"] overflow-x-hidden'>
       <div className="absolute h-1/2 w-full bottom-0 leading-none text text-[4.5vw] uppercase  flex items-end p-10   justify-between ">
        <TextIntersectionObserver children={['From Vision','to Virtual Brilliance']} className={'max-sm:text-2xl'}/>
        <div className=" w-[20%] ">
        <Paragraph className={`text-sm w-full max-sm:hidden text-right capitalize pb-2 `} phrases={['Adobe Firefly transforms visionary concepts into stunning digital realities with advanced shader technology and immersive WebGL experiences.']}/>
        </div>
       </div>
      <BrainStorming/>
    </div>
  )
}

export default LandingPage