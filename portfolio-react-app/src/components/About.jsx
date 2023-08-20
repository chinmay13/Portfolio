import React from "react";
import style from "./Common-style";

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
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Chinmay, nice to meet you, Please take a look around</p>
          </div>
          <div>
            <p>This is where I will add my about</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
