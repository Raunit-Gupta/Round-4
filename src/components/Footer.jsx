// import React from "react";

// // const FooterData = [
// //   {
// //     Title: "Contact us",
// //     links: [{ name: "+852 800 906672" }, { name: "bangnolufsen.com" }],
// //   },
// //   {
// //     Title: "Follow us",
// //     links: [
// //       { name: "Youtube", url: "https://youtube.com" },
// //       { name: "Twitter", url: "https://twitter.com" },
// //       { name: "Facebook", url: "https://facebook.com" },
// //       { name: "Instagram", url: "https://instagram.com" },
// //     ],
// //   },
// //   {
// //     Title: "Products",
// //     links: [
// //       { name: "Speakers", url: "/Speakers" },
// //       { name: "Headphones", url: "/headphones" },
// //       { name: "Television", url: "/television" },
// //       { name: "Soundbars", url: "/soundbars" },
// //       { name: "World of B&O", url: "/worldb&o" },
// //     ],
// //   },
// // ];

// const Footer = () => {
//   return (
//     <div>
//       <div className="footer-main w-[97%] h-[55vh] max-md:h-[30vh] flex flex-col gap-3 items-center justify-center bg-zinc-200 rounded-b-3xl mx-4 ">
//         <h3 className="max-sm:text-sm text-[2rem]  text-black font-['satoshi'] font-bold">
          
//         </h3>
//         <h2 className="font-Secondary text-[1.5rem] max-md:text-sm py-3 max-md:py-0 text-center text-black ">
          
//         </h2>
      
//       </div>
//       <div
//         className="relative h-[65vh] max-md:h-[90vh] max-xs:h-[93vh]  bg-black "
//         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
//       >
//         <div className="fixed bottom-0 h-[65vh] max-md:h-[90vh]  max-xs:h-screen w-full text-white ">
//        <div className="h-[90%] w-full flex   ">
//      <div className="h-full w-1/4 p-5 ">
//      <img className="w-[70%] h-[20%] " src="https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478027/WhatsApp_Image_2024-09-05_at_00.01.32_061b5787-removebg-preview_jkpbil.png" alt="" />
//      </div>

//      <div className="h-full w-1/4   flex flex-col p-10   items-center   ">
//      <div className="w-full">
//         <h1>Adobe</h1>
//      </div>
//      <div className="w-full flex flex-col">
//         <h2>About</h2>
//         <h2>Ai Overview</h2>
//         <h2>Events</h2>
//         <h2>Intgrity</h2>
//         <h2>Trustr center</h2>
//         <h2>Supply Chain</h2>
       
//      </div>
//      </div>


//      <div className="h-fullEnterprise Support w-1/4  items-center    p-10 ">
//      <div className="w-full">
//         <h1>Support</h1>
//      </div>
//      <div className="w-full flex flex-col">
//         <h2>Download And Install</h2>
//         <h2>Genuine softwareSupport</h2>
//         <h2>Help Center</h2>
// <h2>Adobe Support Community</h2>
//         <h2>Enterprise Support</h2>
//         <h2>Genuine software</h2>


//      </div>
//      </div>

//      <div className="h-full w-1/4 flex flex-col p-10  items-center   ">
//      <div className="w-full">
//      <h1>Social</h1>
//      </div>
//      <div className="w-full flex flex-col">
//         <h2>Insta</h2>
//         <h2>Twitter</h2>
//      </div>
//      </div>

//        </div>
//        <div className="h-[10%] w-full  border-t-[0.6px] border-zinc-400 flex justify-between items-center text-xs px-10 ">
//         <h1>
//         Copyright © 2024 Adobe. All rights reserved.
//         </h1>
//         <h1>By Team SPIR8</h1>
//        </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { memo, useContext } from "react";
import NavLinkAnimation from "./NavLinkAnimation";
import Button from "./Button";



const FooterData = [
  {
    title: "Services",
    links: [
      { name: "Home", url: "" },
      { name: "AdobeCloud", url: "" },
      { name: "Designs", url: "" },
      { name: "Solutions", url: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Terms-of-Use", url: "" },
      { name: "Privacy-Policy", url: "" },
      { name: "Cookies-Policy", url: "" },
      { name: "Coupon-Policy", url: "" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Youtube", url: "https://youtube.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ],
  },
];

const Footer = () => {
 


  return (
    <div
      className="relative h-[90vh]  max-lg:h-[90vh] bg-transparent "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[90vh]  max-lg:h-[85vh] w-full text-white">
        <div className="h-full w-full bg-[transparent]  ">
          <div className="h-[90%] max-lg:h-[87%] w-full bg-transparent flex  max-lg:flex-col  ">
            <div className="h-full w-1/2 max-lg:h-[50%] max-lg:w-full  bg-black  flex flex-col gap-10 px-10  max-lg:px-10 py-10  max-lg:py-2">
             
                <img className="w-[20%] object-contain h-[20vh]" src="https://res.cloudinary.com/dsxhjoxsc/image/upload/v1725478027/WhatsApp_Image_2024-09-05_at_00.01.32_061b5787-removebg-preview_jkpbil.png" alt="" />
             <div className="flex flex-col gap-5">
              <h1 className="text-3xl">Ignite Your Creativity with Adobe Firefly</h1>
              <h2>Unleash the full potential of your imagination with Adobe Firefly—where innovative design meets powerful tools for crafting stunning visuals.</h2>
             </div>
            <div className=" flex  gap-5 ">
            <Button
                text={"Explore More"}
                p={"group-hover:text-[#fff] "}
                circ={"bg-black"}
                customclass={` w-fit  mt-[2vh]  text-black bg-white border-[1px] text-xs`}
            />
            <Button
                text={"Explore More"}
                p={"group-hover:text-[#000] "}
                circ={"bg-white"}
                customclass={` w-fit mt-[2vh] border-[1px] text-xs`}
            />

            </div>
             
            </div>
            <div className="h-full w-1/2  max-lg:h-[50%]  max-lg:w-full  bg-black p-10 ">
            <div className="h-[12%]  w-full text-end text-sm ">
              <h1>back to top</h1>
            </div>
              <div className="w-full h-[85%] uppercase text-[1.2vw] font-['sussi'] flex justify-between py-10 px-20  max-lg:p-10 ">
                {FooterData.map((section, index) => (
                  <div key={index}>
                    <h1
                      className=" max-lg:text-xl max-md:text-lg "
                    >
                      {section.title.toUpperCase()}
                    </h1>
                    <div className="pt-10 flex flex-col text-sm  max-lg:text-xl max-md:text-lg  gap-4">
                      {section.links.map((link, idx) => (
                       <NavLinkAnimation key={idx}>{link.name}</NavLinkAnimation>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
             
            </div>
            
          </div>
          <div className="h-[10%] w-full bg-black flex justify-center items-center text-xs px-10 border-t-[0.5px] border-zinc-600 ">
                <h1>© 2024 Adobe. All rights reserved.</h1>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
