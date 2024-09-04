import React from 'react'
import Paragraph from './Paragraph'

const WhyTrustUs = () => {
  return (
    <div className=' h-screen w-full bg-black flex flex-col justify-center items-center text-white'>
        <Paragraph className={' text-[3.4vw]'} phrases={['Why Trust Us?']} />
        <Paragraph className={' text-[2.4vw]'} phrases={['We are committed to helping you achieve your goals.' ]} />
        <div style={{backgroundImage: "radial-gradient(170% 160% at 50% 0%, #020617 50%, #DD335C)"}} className=" h-[60vh] w-[80%] bg-red-500 rounded-2xl flex flex-col justify-center items-center">
            <h1 className='text-[3vw]'>ADOBE FIREFLY</h1>
            <p  className='text-[1.2vw] w-[60%] text-center' >Evervault balances flexibility and security extremely well. They've built clean and thoughtful abstractions over advanced security foundations, and the product just works. We barely have to think about it.
            </p>
    
        </div>
    </div>
  )
} 

export default WhyTrustUs


const Button = ({children}) => {
    return (
        <div className='w-[30%] border-[1px] rounded-full '>
            <Button>{children}</Button>
        </div>
    )
}