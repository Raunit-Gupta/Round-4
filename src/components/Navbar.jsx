
import React, { useEffect, useRef, useState } from "react";
import NavLinkAnimation from "./NavLinkAnimation";
import { MdOutlineClose } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import gsap from "gsap";

const Navbar = () => {
  const [opennav, setopenNav] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`glass-morph w-[94%] top-5 left-1/2 -translate-x-1/2 text-white bg-black h-[8vh] fixed  flex items-center justify-between max-lg:px-0 px-20 max-2xl:px-5 z-[99] transition-transform duration-500 rounded-3xl ${
          hideNavbar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <img className=" h-[20vh] w-[10vw] object-contain" src="https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478027/WhatsApp_Image_2024-09-05_at_00.01.32_061b5787-removebg-preview_jkpbil.png" alt="" />
        <div className="max-lg:hidden relative w-fit h-full  text-[1.rem] max-xl:text-[1rem] tracking-wider text-white flex items-center gap-10 max-xl:gap-8">
          <NavLinkAnimation>HOME</NavLinkAnimation>
          <NavLinkAnimation>ADOBE CLOUD</NavLinkAnimation>
          <NavLinkAnimation>DESIGN</NavLinkAnimation>
          <NavLinkAnimation>SOLUTIONS</NavLinkAnimation>
          <NavLinkAnimation>SIGN-IN</NavLinkAnimation>
        </div>
        <HiMenuAlt4
          onClick={() => {
            setopenNav((prev) => !prev);
          }}
          className="text-3xl absolute z-[9] top-[40%] -translate-y-1/2 right-[5%] lg:hidden text-white"
        />
      </div>
      <FullScreenNav opennav={opennav} setopenNav={setopenNav} />
    </>
  );
};

export default Navbar;

const FullScreenNav = ({ opennav, setopenNav }) => {
  const navlinksRef = useRef([]);

  useEffect(() => {
    if (opennav) {
      gsap.to(navlinksRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
      });
    } 
    else {
      gsap.to(navlinksRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
      });
    }
  }, [opennav]);

  return (
    <div
      className={`${
        opennav ? "w-full" : "w-0 delay-100"
      } fixed top-0 right-0 z-[100] flex flex-col text-white overflow-hidden justify-between transition-all duration-1000 h-screen `}
    >
      <div className="h-[12vh] flex items-center justify-end px-20 w-full">
        {/* <MdOutlineClose
          onClick={() => {
            setopenNav((prev) => !prev);
          }}
          className=" text-white text-4xl"
        /> */}
      </div>

      <div className="h-[80%] lg:hidden w-full flex font-['Teko'] py-10 text-[2.5rem]  flex-col items-center gap-6 ">
        {["HOME", "ADOBE-CLOUD", "DESIGN", "SOLUTIONS", "SIGN-IN"].map(
          (item, index) => (
            <div key={index} className="w-fit h-fit overflow-hidden">
              <div
                className="h-fit w-fit overflow-hidden"
                ref={(el) => (navlinksRef.current[index] = el)}
              >
                <NavLinkAnimation>{item}</NavLinkAnimation>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
