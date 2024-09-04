import React from "react";
import GlassmorphismDiv from "./GlassBg";
import Paragraph from "./Paragraph";
import TextIntersectionObserver from "./TextIntersectionObserver";

const About = () => {
  const data = [
    {
      title: "Up to 10X Faster",
      desc: "Experience Photoshop (beta)’s revolutionary Generative Fill feature.",
    },
    {
      title: "Create Stunning Visuals",
      desc: "Generate high-quality images in an instant with Firefly Image 3 Model. ",
    },
    {
      title: "Generative Shape Fill",
      desc: "Effortlessly fill vector outlines with Firefly’s Generative Shape Fill style while saving time.",
    },
  ];
  
  return (
    <>
    
      <div className="  h-screen w-full flex items-center justify-center flex-col  text-white bg-black text-center px-[8vw] gap-10  max-sm:px-2 ">
      <Paragraph phrases={["Up to 10X Faster"]} />
      {/* <Paragraph phrases={["Manufacturing measured", "in weeks, not months"]} /> */}
      <TextIntersectionObserver children={["Adobe Firefly is a family of generative AI models created by Adobe, designed to help creatives produce high-quality content more efficiently."]} className={"text-5xl max-sm:text-xl"}  />

      <div className="  h-[40vh]  max-sm:h-[50vh] w-full  sm:text-start flex justify-between sm:items-center max-sm:flex-col  ">
        <Paragraph
          phrases={[
            "Effortlessly remove background ",
            "with Generative Remove",
            "by Firefly AI to see only",
            " what you want",
          ]}
          className={"text-xl max-sm:text-lg max-sm:text-[5vw] max-sm:leading-[6vw]"}
        />
        <div className=" h-full w-[60%] max-sm:w-full  flex gap-5  max-sm:flex-wrap max-sm:pl-5 ">
          {data.map((item, index) => (
            // <GlassmorphismDiv key={index} size="max-w-lg" className="custom-class">
            <div
              key={index}
              className=" h-full w-full  gap-5  flex flex-col justify-center items-start max-sm:text-center max-sm:h-[40%] max-sm:mt-10 max-sm:w-[40%]   "
            >
              <Paragraph phrases={[item.title]} className={"text-xl max-sm:text-lg"} />
              <Paragraph phrases={[item.desc]} className={"text-md "} />
            </div>
            // </GlassmorphismDiv>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
