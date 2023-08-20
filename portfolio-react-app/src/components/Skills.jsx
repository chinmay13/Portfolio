import React, { useEffect, useState } from "react";
import ReactImg from "../assets/React-icon.png";
import JavaImg from "../assets/java.png";
import PythonImg from "../assets/python.png";
import SpringImg from "../assets/spring.png";
import JavascriptImg from "../assets/javascript.png";
import OracleImg from "../assets/oracle.png";
import MongoDBImg from "../assets/mongodb.png";
import FirebaseImg from "../assets/firebase.png";
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
      name="Skills"
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
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaImg} alt="React Icon" />
            <p>Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PythonImg} alt="React Icon" />
            <p>Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SpringImg} alt="React Icon" />
            <p>Java Spring</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavascriptImg}
              alt="React Icon"
            />
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDBImg} alt="React Icon" />
            <p>MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={OracleImg} alt="React Icon" />
            <p>Oracle</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FirebaseImg} alt="React Icon" />
            <p>Firebase</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Skills;
