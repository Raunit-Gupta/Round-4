import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Paragraph from './Paragraph';
import Button from './Button';

// ImageColumn Component
const ImageColumn = ({ images, top, left, zIndex }) => {
  return (
    <motion.div
      style={{ top, left, zIndex }}
      className={`absolute h-fit w-[22%] flex flex-col gap-5`}
    >
      {images.map((image, index) => (
        <div key={index} className="h-[50vh] w-full rounded-lg overflow-hidden">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
      ))}
    </motion.div>
  );
};

// Main Component
const ImageContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform values for top position
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const top1 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  // Array of Images for Each Column
  const imagesArray = [
    [
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468956/367704847_1516946689062484_6297081056486855602_n_iaoen4.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468956/347284835_625020909543047_3192163837509009042_n_zzn0gp.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468957/339965355_152606171077755_521199829525725767_n_ycakeo.jpg",
    ],
    [
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468958/367304152_1035789767560931_4298973607123400243_n_f746ou.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468956/450103121_25931911549787443_4679962873862509436_n_aon4sk.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468956/339965355_152606171077755_521199829525725767_n_1_rm2ind.jpg",
    ],
    [
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468959/339340277_1354406682016843_8561306357224163829_n_gcvo0w.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725468963/367058955_320956433765138_519604645001045614_n_1_vreusr.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725469439/367508410_664182725764434_1932164724405994024_n_i9mfda.jpg",
    ],
    [
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725469438/367762851_325700796480122_6264543631485549061_n_f4fag8.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725469438/367762851_325700796480122_6264543631485549061_n_f4fag8.jpg",
      "https://res.cloudinary.com/dd8mwqg6g/image/upload/v1725469438/370737810_883772366599009_7603173789256041829_n_f0a33f.jpg",
    ],
  ];

  return (
    <div className="w-full bg-black">
    
      <div ref={containerRef} className="h-[200vh] bg-black relative">
        <div className="sticky top-0 overflow-hidden h-screen px-5 flex gap-5">
          {/* Render Image Columns */}
          <div className='text-white text-[5vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center z-[99] leading-none '>
            <Paragraph phrases={['Generate', 'Your Images']} />
            <Button
                text={"Explore More"}
                p={"group-hover:text-[#000] "}
                circ={"bg-white"}
                customclass={` w-fit mx-auto mt-[2vh] bg-transparent border-[1px] text-lg`}
                />
          </div>
          {imagesArray.map((images, index) => (
            <ImageColumn
              key={index}
              images={images}
              top={index % 2 === 0 ? top : top1}
              left={`${3 + 24 * index}%`} // Use percentage for proper alignment
              zIndex={10 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
