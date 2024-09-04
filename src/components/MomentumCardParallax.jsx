import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MomentumCardParallax = () => {
  const data = [
    {
      Logo: "Vibe Interior",
      rightText: "Web Development",
      img: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      leftTitle: "Momentum Vibe Interior",
      leftDes: "Lead Generation For A Cool Team Of Interior Designers",
      buttonText: "Discover",
      top: "top-0",
    },
    {
      Logo: "Alto Design",
      rightText: "Web Development",
      img: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      leftTitle: " Momentum Alto Design",
      leftDes: "Collaborating with Good Vibes at Each Step",
      buttonText: "Discover",
      top: "top-[12%]",
    },
    {
      Logo: "Arhab Studio",
      rightText: "Web Development",
      img: "https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yfGVufDB8fDB8fHww",
      leftTitle: " Momentum Arhab Studio",
      leftDes: " Collaborating with Good Vibes at Each Step",
      buttonText: "Discover",
      top: "top-[24%]",
    },
  ];

  const containerref = useRef();

  const { scrollYProgress } = useScroll({
    target: containerref,
    offset: ["start start", "end end"],
  });

  const cardy1 = useTransform(scrollYProgress, [0, 0.35], ["100%", "0%"]);
  const cardy2 = useTransform(scrollYProgress, [0.35, 0.7], ["100%", "0%"]);
  const cardy3 = useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]);

  const cardScale1 = useTransform(scrollYProgress, [0, 0.35], [0.5, 1]);
  const cardScale2 = useTransform(scrollYProgress, [0.35, 0.7], [0.5, 1]);
  const cardScale3 = useTransform(scrollYProgress, [0.7, 0.9], [0.5, 1]);

  const blueWidth1left = useTransform(
    scrollYProgress,
    [0.14, 0.35],
    ["0%", "98%"]
  );
  const blueWidth2left = useTransform(
    scrollYProgress,
    [0.48, 0.7],
    ["0%", "98%"]
  );
  const blueWidth3left = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    ["0%", "98%"]
  );

  const leftTextScale1 = useTransform(scrollYProgress, [0, 0.35], [6, 1]);
  const leftTextScale2 = useTransform(scrollYProgress, [0.35, 0.7], [6, 1]);
  const leftTextScale3 = useTransform(scrollYProgress, [0.7, 0.9], [6, 1]);

  const rightTextScale1 = useTransform(scrollYProgress, [0.14, 0.35], [0, 1]);
  const rightTextScale2 = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
  const rightTextScale3 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const imageScale1 = useTransform(scrollYProgress, [0, 0.35], [0.9, 1]);
  const imageScale2 = useTransform(scrollYProgress, [0.35, 0.7], [0.5, 0.98]);
  const imageScale3 = useTransform(scrollYProgress, [0.7, 0.9], [0.5, 1]);

  const animation = [
    {
      card : cardy1,
      cardScale : cardScale1,
       blue: blueWidth1left,
      leftText :leftTextScale1,
      rightText: rightTextScale1,
      img: imageScale1,
    },
    {
      card: cardy2,
      cardScale: cardScale2,
      blue: blueWidth2left,
      leftText: leftTextScale2,
      rightText: rightTextScale2,
      img: imageScale2,
    },
    {
      card: cardy3,
      cardScale: cardScale3,
      blue: blueWidth3left,
      leftText: leftTextScale3,
      rightText: rightTextScale3,
      img: imageScale3,
    },
  ];

  return (
    <div className="h-[900vh]  w-full relative">
      <div className="sticky px-5  top-0 h-[100vh] w-full bg-black font-[Gilroy] ">
        <div className="h-full w-full bg-black relative">
          {animation.map((item, i) => (
            <Card
              top={data[i].top}
              Logo={data[i].Logo}
              rightText={data[i].rightText}
              img={data[i].img}
              leftTitle={data[i].leftTitle}
              leftDes={data[i].leftDes}
              buttonText={data[i].buttonText}
              y={item.card}
              scaleCard={item.cardScale}
              scaleText={item.leftText}
              rightTextScale={item.rightText}
              scaleImage={item.img}
              blueWidthLeft={   item.blue}
            />
          ))}

          {/* <Card top={data[1].top} Logo={data[1].Logo} rightText={data[1].rightText} img={data[1].img} leftTitle={data[1].leftTitle} leftDes={data[1].leftDes} buttonText={data[1].buttonText} y={cardy2} scaleCard={cardScale2} scaleText={leftTextScale2} rightTextScale={rightTextScale2} scaleImage={imageScale2}  blueWidthLeft={blueWidth2left} />

                <Card top={data[2].top} Logo={data[2].Logo} rightText={data[2].rightText} img={data[2].img} leftTitle={data[2].leftTitle} leftDes={data[2].leftDes} buttonText={data[2].buttonText} y={cardy3} scaleCard={cardScale3} scaleText={leftTextScale3} rightTextScale={rightTextScale3} scaleImage={imageScale3}  blueWidthLeft={blueWidth3left} /> */}
        </div>
      </div>
    </div>
  );
};

export default MomentumCardParallax;

const Card = ({
  Logo,
  rightText,
  img,
  leftTitle,
  leftDes,
  buttonText,
  y,
  scaleCard,
  scaleText,
  rightTextScale,
  scaleImage,
  blueScale,
  blueWidthLeft,
  top,
}) => {
  return (
    <motion.div
      style={{ y: y, scale: scaleCard }}
      className={`absolute  ${top} h-[95vh] bg-[#10181D] w-full text-white rounded-3xl `}
    >
      <div className="h-[2%] w-full  flex items-center justify-center relative">
        <motion.div
          style={{ width: blueWidthLeft }}
          className=" absolute top-0 h-full w-1/2 rounded-3xl bg-blue-500"
        ></motion.div>
      </div>
      <div className="h-[15%] w-full flex justify-between items-center ">
        <motion.h1
          style={{ scale: scaleText }}
          className="text-3xl font-bold origin-left px-[1%]"
        >
          {Logo}
        </motion.h1>
        <div className="h-full w-[40%] flex justify-around items-center text-sm">
          <motion.h1
            className=" bg-black text-white px-3  rounded-full"
            style={{ scale: rightTextScale }}
          >
            {rightText}
          </motion.h1>
          <motion.h1
            className=" bg-black text-white px-3  rounded-full"
            style={{ scale: rightTextScale }}
          >
            {rightText}
          </motion.h1>
          <motion.h1
            className=" bg-black text-white px-3  rounded-full"
            style={{ scale: rightTextScale }}
          >
            {rightText}
          </motion.h1>
        </div>
      </div>
      <div className="relative px-3 h-[80%] w-full  ">
        <motion.img
          style={{ scale: scaleImage }}
          className="h-full rounded-3xl w-full object-cover pb-3 origin-top "
          src={img}
          alt=""
        />
        <div className="btext absolute bottom-[6%] flex justify-between items-center  w-full h-fit px-10 text-white  ">
          <div className=" w-[20%] ">
            <h1 className="text-sm">{leftTitle}</h1>
            <h1 className="text-2xl ">{leftDes}</h1>
          </div>

          <button className="bg-[blue]  px-10 py-2 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
