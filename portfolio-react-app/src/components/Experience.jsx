import React from "react";
import style from "./Common-style";

function Experience() {
  return (
    <div
      name="Experience"
      className={style.background + ` ` + style.screenSize}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-gray-300">
        <div>
          <p className={`text-4xl font-bold inline ` + style.underlineBorder}>
            Experience
          </p>
          <p className="py-4"> This is my Work experience</p>
        </div>
        <div className=" grid grid-cols-2 max-w-[1000px]  text-grey-200">
          <div className="border-r-1 border-pink-600"> RIT Image</div>
          <div> GTA Description</div>
          <div className="border-r-1 border-pink-600 py-4">eQ Image</div>
          <div className="py-4">eQ Description</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
