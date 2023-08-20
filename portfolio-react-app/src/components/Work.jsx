import React from "react";
import WorkImg from "../assets/React-icon.png";
import project1 from "../assets/React-icon.png";

function Work() {
  return (
    <div name="Work" className="bg-[#0a192F] md:h-screen w-full text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center content-div">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
