import React from "react";
import style from "./Common-style";
import pic1 from "../assets/Pic1.jpg";
import pic2 from "../assets/pic2.jpg";

function About() {
  return (
    <div
      name="About"
      className={`text-gray-300 ` + style.background + ` ` + style.screenSize}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className={`text-4xl font-bold inline ` + style.underlineBorder}>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4">
          <div className="sm:text-center text-1xl">
            <p className="pb-4">
              Welcome to my portfolio! I'm a dynamic IT professional with a
              strong background in software development, specializing in Java,
              Spring MVC, JavaScript, Python, React.js and database management
              with Oracle and PostgreSQL. With three years of industry
              experience, I've honed my skills in creating robust applications
              and delivering innovative solutions. I thrive in fast-paced
              environments and enjoy collaborating with cross-functional teams
              to drive projects to successful completion.
            </p>
            <p>
              I'm passionate about contributing to the success of innovative
              organizations that value creativity, collaboration, and continuous
              improvement. I'm open to new opportunities and look forward to
              connecting with professionals who share a similar passion for
              software development and technology.
            </p>
          </div>
          <div className="self-center justify-center items-center align-middle">
            <img
              src={pic2}
              className="max-h-[270px] max-w-[270px] mx-auto border-4 border-[#64FFDA] p-1"
            />
          </div>
          {/* <div className="justify-center items-center align-middle">
            <img src={pic1} className="max-h-[200px] max-w-[200px] mx-auto" />
          </div> 
          <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
