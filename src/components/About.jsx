import React from "react";
import GlassmorphismDiv from "./GlassBg";
import Paragraph from "./Paragraph";
import TextIntersectionObserver from "./TextIntersectionObserver";

const About = () => {
  const data = [
    {
      title: "Up to 10X Faster",
      desc: "Try Photoshop (beta)’s new Generative Fill for richer, lifelike images with unmatched control.",
    },
    {
      title: "Up to 10X Faster",
      desc: "Create high-quality images with the Firefly Image 3 Model, offering improved composition, ",
    },
    {
      title: "Up to 10X Faster",
      desc: "Use Generative Shape Fill to quickly fill vector outlines and match your artwork’s style.",
    },
  ];
  return (
    <>
    
      <div className="  h-screen w-full flex items-center justify-center flex-col  text-white bg-black text-center px-[8vw] gap-10  max-sm:px-2 ">
      <Paragraph phrases={["Up to 10X Faster"]} />
      {/* <Paragraph phrases={["Manufacturing measured", "in weeks, not months"]} /> */}
      <TextIntersectionObserver children={["Manufacturing measured,", " in weeks, not months"]} className={"text-5xl"}  />

      <div className="  h-[40vh]  max-sm:h-[50vh] w-full  sm:text-start   flex justify-between sm:items-center max-sm:flex-col  ">
        <Paragraph
          phrases={[
            "Effortlessly remove background ",
            "with Generative Remove",
            "by Firefly AI to see only",
            " what you want",
          ]}
          className={"text-3xl max-sm:text-lg max-sm:text-[5vw] max-sm:leading-[6vw]"}
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
