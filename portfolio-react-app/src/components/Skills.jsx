import React, { useEffect, useState } from "react";
import ReactImg from "../assets/React-icon.png";
import JavaImg from "../assets/java.png";
import PythonImg from "../assets/python.png";
import SpringImg from "../assets/spring.png";
import JavascriptImg from "../assets/javascript.png";
import OracleImg from "../assets/oracle.png";
import MongoDBImg from "../assets/mongodb.png";
import FirebaseImg from "../assets/firebase.png";
import NodeImg from "../assets/Node.png";
import PostgresImg from "../assets/Postgres.png";
import FlaskImg from "../assets/Flask.png";
import GitHubImg from "../assets/GitHub.png";

import { useScroll, animated, useSpring } from "@react-spring/web";
import style from "./Common-style";

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
      className="bg-[#0a192F] w-full text-gray-300"
      //   onMouseEnter={applyScrollEvent}
      //   onMouseLeave={removeEvent}
    >
      <animated.div
        // style={{ opacity: scrollYProgress }}
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full "
      >
        <div>
          <p className={`text-4xl font-bold inline ` + style.underlineBorder}>
            Skills
          </p>
        </div>
        <div>
          <p className="py-4">
            {" "}
            These are some of the technologies that I have worked on
          </p>
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
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeImg} alt="React Icon" />
            <p>Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FlaskImg} alt="React Icon" />
            <p>Flask</p>
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

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PostgresImg} alt="React Icon" />
            <p>Postgres</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHubImg} alt="React Icon" />
            <p>GitHub</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Skills;
