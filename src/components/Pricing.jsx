import React from 'react'
import Paragraph from './Paragraph'
import TextIntersectionObserver from './TextIntersectionObserver'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Button from './Button';
const Pricing = () => {
    const data = [
        {
            title: 'Free',
            prices: '$0',
            desc:[ 'Perfect for individuals ', 'exploring their creativity with', ' Adobe Firefly.'],
            validity: 'per month',
            option1: 'Limited AI functionality',
            option2: '500 image renders',
            option3: '500 design assets',
            button: 'Get Started',
        },
        {
            title: 'Pro',
            prices: '$395',
            validity: 'per month',
            desc:[ 'Ideal for professionals who', ' need advanced tools and full', ' AI capabilities for their', ' creative projects.'],
            option1: 'Full AI functionality',
            option2: '5,000 design assets',
            option3: '5,000 image renders',
            button: 'Get Started',
        },
        {
            title: 'Enterprise',
            prices: 'Custom Pricing',
            desc: [' Tailored for large teams and', ' enterprises that require full', ' access, advanced features,', ' and dedicated support.'],
            option1: 'Unlimited design tools ',
            option2: 'Unlimited design assets',
            option3: 'Unlimited image renders',
            button: 'Get Started',
        }
    ]
  return (
    <>
        <div className='h-screen w-full flex items-center justify-center overflow-hidden flex-col bg-black text-white '>
        <Paragraph phrases={["Up to 10X Faster"]} />
      {/* <Paragraph phrases={["Manufacturing measured", "in weeks, not months"]} /> */}
      <TextIntersectionObserver children={["Manufacturing measured,", " in weeks, not months"]} className={"text-3xl text-center"}  />

      <div className=" h-[60vh]   max-sm:h-[50vh] w-[60%]  sm:text-start   flex justify-between  items-bottom max-sm:flex-col  gap-5  ">
      {data.map((item, index) => (
            // <GlassmorphismDiv key={index} size="max-w-lg" className="custom-class">
            <div
              key={index}
              className="glass-morph h-full w-[30vw]  gap-[2vw]  flex flex-col justify-center  items-start   max-sm:text-center max-sm:h-[40%] max-sm:mt-10 px-[3vw] max-sm:w-[40%] mt-10   "
            >
             
             <Paragraph phrases={[item.title]} className={"text-2xl  max-sm:text-sm"} />
              
              <div className=" flex justify-center items-end gap-2">
              <Paragraph  phrases={[item.prices]} className={` text-2xl `} />
              <h1 className=' text-xs mb-[.2vw]'>{item.validity}</h1>
              </div>

             
              <Paragraph phrases={item.desc} className={"text-sm "} />
              <div className=" gap-[.5vw] flex flex-col ">
              <div className="flex items-center gap-2">
              <IoMdCheckmarkCircle className="text-green-500" />

              <div className=" flex  items-center gap-2 ">
              <Paragraph  phrases={[item.option1]} className={"text-sm"} />
              </div>
              </div>
              
              <div className="flex items-center gap-2">
              <IoMdCheckmarkCircle className="text-green-500" />
              <div className=" flex  items-center gap-2 ">
              <Paragraph  phrases={[item.option2]} className={"text-sm"} />
              </div>
              </div>
              <div className="flex items-center gap-2">
              <IoMdCheckmarkCircle className="text-green-500" />
              <div className=" flex  items-center gap-2 ">
              <Paragraph  phrases={[item.option3]} className={"text-sm"} />
              </div>
              </div>
              </div>
              <Button
                text={"Explore More"}
                p={"group-hover:text-[#000] "}
                circ={"bg-white"}
                customclass={` w-fit mx-auto mt-[2vh]  bg-transparent border-[1px] text-xs`}
                />
            </div>
            // </GlassmorphismDiv>
          ))}

      </div>
    </div>
    </>
  )
}

export default Pricing