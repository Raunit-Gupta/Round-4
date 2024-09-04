import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

const HorizontalSlider = () => {
  const images = [
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725480025/download__13_-removebg-preview_irqz2l.png ",
      rotate: 0,
      imgrotate: 0,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478752/download__1_-removebg-preview_yn2pl1.png",
      rotate: 30,
      imgrotate: 330,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478815/download__2_-removebg-preview_zu4dcy.png",
      rotate: 60,
      imgrotate: 300,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478884/download-removebg-preview_1_jqs00e.png",
      rotate: 90,
      imgrotate: 270,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478972/download__3_-removebg-preview_zoauhg.png",
      rotate: 120,
      imgrotate: 240,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479139/download__4_-removebg-preview_a20pnd.png",
      rotate: 150,
      imgrotate: 210,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479251/download__5_-removebg-preview_xihgk1.png",
      rotate: 180,
      imgrotate: 180,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479279/download__6_-removebg-preview_oulpjo.png",
      rotate: 210,
      imgrotate: 150,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479343/images-removebg-preview_mffjbs.png",
      rotate: 240,
      imgrotate: 120,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479454/download__7_-removebg-preview_ez9vbt.png",
      rotate: 270,
      imgrotate: 90,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479583/download__10_-removebg-preview_gptqd8.png",
      rotate: 300,
      imgrotate: 60,
    },
    {
      img: "https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725479629/download__11_-removebg-preview_n2eqoh.png",
      rotate: 330,
      imgrotate: 30,
    },
  ];

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "300% end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 290]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -290]);
  return (
    <>
      <div
        ref={containerRef}
        className="h-[120vh] w-full font-[Gilroy] text-white bg-black "
      >
        <div  style={{backgroundImage: "radial-gradient(20% 40% at 50% 50%, #e6579c 0%, #000)"}} className="sticky top-[100%]  h-[100vh] w-full bg-[#000] flex items-center justify-center">
          <div className="h-[90vh] w-[90vh] rounded-full flex items-center justify-center relative">
            {images.map((i, index) => (
              <motion.div
                key={index}
                style={{
                  rotateZ: y,
                  transformBox: "view-box",
                  transformOrigin: " bottom center",
                  position: "absolute",
                  height: "50%",
                  width: "10%",
                  rotate: `${i.rotate}deg`,
                }}
                className="text-3xl  origin-center  mt-[-45%] "
              >
                <motion.div
                  style={{
                    rotateZ: x,
                    // transformBox: 'view-box',
                    transformOrigin: " bottom center",
                    // position: 'absolute',
                    height: "5vh",
                    width: "fit-content",
                    rotate: `${i.imgrotate}deg`,
                  }}
                  className="h-fit w-fit my-5 "
                >
                  <img src={i.img} className="h-full w-full object-contain " />
                </motion.div>
              </motion.div>
            ))}
            <div  className="h-[60vh] w-[60vh] bg-[#000] rounded-full flex justify-center items-center">
              <div className=" h-1/2 w-full  flex justify-center flex-col items-center gap-2 ">
                <h1 className=" text-4xl">Our Collaborators</h1>
                <h1 className=" text-3xl">loving creating art with us</h1>
                <div className=" w-full flex justify-center items-center gap-10 text-lg ">
                  <h1 className=" flex items-center text-sm">
                    <FiPlus />
                    800M VIEWS
                  </h1>
                  <h1 className=" flex items-center text-sm">
                    <FiPlus />
                    100 PROJECTS
                  </h1>
                </div>
                <Button
                text={"Explore More"}
                p={"group-hover:text-[#000] "}
                circ={"bg-white"}
                customclass={` w-fit mx-auto mt-[10vh] max-sm:mt-0 bg-black border-[1px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalSlider;
