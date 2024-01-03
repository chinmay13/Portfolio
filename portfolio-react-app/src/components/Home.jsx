import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import style from "./Common-style";
import { Link } from "react-scroll";
function Home() {
  return (
    <div name="Home" className={style.background + ` ` + style.screenSize}>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className={style.textColor}>Hi my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Chinmay Bhate
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am an adaptable and driven professional with 3 years of hands-on
          experience with expertise in building innovative solutions that have
          tangible impact.
        </p>
        <div>
          <Link
            to="Work"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            <button
              className={
                `group border-2 px-6 py-3 my-2 flex items-center border-[#64FFDA] ` +
                style.textColor
              }
              onClick={() => {}}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
