import React, { useEffect, useState } from "react";
import ReactImg from "../assets/React-icon.png";
import { useScroll, animated, useSpring } from "@react-spring/web";

function Skills() {
  const containerRef = React.useRef(null);
  const handleScroll = (event) => {
    console.log(event);
  };

  const applyScrollEvent = () => {
    // console.log("adding scroll event");
    // window.addEventListener("scroll", handleScroll);
  };
  //   const { scrollYProgress } = useScroll({
  //     container: containerRef,
  //     onChange: ({ value: { scrollYProgress } }) => {
  //       console.log(scrollYProgress);
  //     },
  //   });
  //   const removeEvent = () => {
  //     console.log("removing scroll event");
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  return (
    <div
      name="skills"
      className="bg-[#0a192F] h-screen w-full text-gray-300"
      //   onMouseEnter={applyScrollEvent}
      //   onMouseLeave={removeEvent}
    >
      <animated.div
        // style={{ opacity: scrollYProgress }}
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Skills;
