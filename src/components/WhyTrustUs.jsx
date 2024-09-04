// import React from 'react'
// import Paragraph from './Paragraph'

// const WhyTrustUs = () => {
//   return (
//     <div className=' h-screen w-full bg-black flex flex-col justify-center items-center text-white'>
//         <Paragraph className={' text-[3.4vw]'} phrases={['Why Trust Us?']} />
//         <Paragraph className={' text-[2.4vw]'} phrases={['We are committed to helping you achieve your goals.' ]} />
//         <div style={{backgroundImage: "radial-gradient(170% 160% at 50% 0%, #020617 50%, #DD335C)"}} className=" h-[60vh] w-[80%] rounded-2xl flex flex-col justify-center items-center">
//             <h1 className='text-[3vw]'>ADOBE FIREFLY</h1>
//             <p  className='text-[1.2vw] w-[60%] text-center' >Evervault balances flexibility and security extremely well. They've built clean and thoughtful abstractions over advanced security foundations, and the product just works. We barely have to think about it.
//             </p>
//             <div className=" h-full w-full">
//                 <Button text={'Learn More'} />
//             </div>
//         </div>
//     </div>
//   )
// } 

// export default WhyTrustUs


// const Button = ({text}) => {
//     return (
//         <div className='w-[30%] h-[50%] border-[1px] rounded-full '>
//             <Button>{text}</Button>
//         </div>
//     )
// }



import React from 'react'
import Paragraph from './Paragraph'

const WhyTrustUs = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-col justify-center items-center text-white p-4'>
      <Paragraph className={'text-[6vw] md:text-[3.4vw]'} phrases={['Why Trust Us?']} />
      <Paragraph className={'text-[4vw] md:text-[2.4vw]'} phrases={['We are committed to helping you achieve your goals.']} />
      <div style={{backgroundImage: "radial-gradient(170% 160% at 50% 0%, #020617 50%, #DD335C)"}} className="h-[50vh] md:h-[60vh] w-full md:w-[80%] rounded-2xl flex flex-col justify-center items-center mt-4">
        <h1 className='text-[5vw] md:text-[3vw]'>ADOBE FIREFLY</h1>
        <p className='text-[3vw] md:text-[1.2vw] w-[90%] md:w-[60%] text-center mt-2'>
          Evervault balances flexibility and security extremely well. They've built clean and thoughtful abstractions over advanced security foundations, and the product just works. We barely have to think about it.
        </p>
        <div className="w-full flex justify-center mt-4">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default WhyTrustUs

const Button = ({children}) => {
  return (
    <button className='w-[40%] md:w-[30%] h-[10vh] md:h-[8vh] border-[1px] border-white rounded-full flex items-center justify-center text-[4vw] md:text-[1.2vw] hover:bg-white hover:text-black transition-all'>
      {children}
    </button>
  )
}
