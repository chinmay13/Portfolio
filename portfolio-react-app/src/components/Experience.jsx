import React from "react";
import style from "./Common-style";
import eQ from "../assets/eQ.png";
import RIT from "../assets/RIT_GCCIS.png";

function Experience() {
  return (
    <div
      name="Experience"
      className={style.background + ` ` + style.screenWidth}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full text-gray-300">
        <div>
          <p className={`text-4xl font-bold inline ` + style.underlineBorder}>
            Experience
          </p>
          <p className="py-4"></p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 max-w-[1000px]  text-grey-200">
          <div className="border-r-1 py-4 m-auto">
            <img className="w-[8rem] m-auto" src={RIT} alt="RIT Icon" />
          </div>
          <div className="pb-4 sm:pb-0">
            <p className="font-bold underline">Graduate Teaching Assistant:</p>
            <p>
              - Recognized as one of the 6 Graduate TAs for the Computer Science
              department.
            </p>
            <p>
              - Teaching Computer Science 1 (CSCI 141) and Computer Science for
              AP Students (CSCI 140) and Mentoring Students for the same
              courses.
            </p>
          </div>
          <div className="border-r-1 py-10 flex items-start justify-center">
            <img className="w-[15rem]" src={eQ} alt="eQ Icon" />
          </div>
          <div className="py-4">
            <p className="font-bold underline">Internship:</p>
            <p>
              {" "}
              - Researched and implemented data creation and update strategies
              within the Solumina system, using ActiveMQ.
            </p>
            <p>
              {" "}
              - Developed robust APIs to synchronize data between Solumina and
              TeamCenter Enterprise seamlessly.
            </p>

            <p className="font-bold underline pt-4">
              Software Developer - Multiple Activities Team:
            </p>
            <p>
              - Led a team of 3 engineers in the Agile development of a key
              project, and collaborated with cross-functional teams on multiple
              initiatives.
            </p>
            <p>
              - Innovated user-friendly applications using eQ’s Web App Toolkit
              and Siemens’ Teamcenter APIs, reducing user efforts by over 90%
              and optimizing work efficiency.
            </p>
            <p>
              - Successfully digitized customer processes by developing a
              full-stack app based on client’s user stories, utilizing Agile
              methodology
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
