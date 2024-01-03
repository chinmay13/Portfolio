import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.png";

import style from "./Common-style";
import Card from "./ProjectCard";
function Work() {
  return (
    <div
      name="Work"
      className={`text-gray-300 ` + style.background + ` ` + style.screenWidth}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className={`text-4xl font-bold inline ` + style.underlineBorder}>
            Projects
          </p>
          <p className="py-4"></p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <Card
            key={1}
            imageSrc={project1}
            projectName={"Figure of Speech Classifier"}
            description={
              "Created a robust deep learning system using models such as BERT and GPT-2 to classify a figure of speech in a given sentence."
            }
            githubLink={
              "https://github.com/chinmay13/Figure_oF_Speech_Classifier"
            }
          />
          <Card
            key={2}
            imageSrc={project2}
            projectName={"Image to Image Translation using CGAN"}
            description={
              "Designed an Image-to-Image Translation model using cGANs to transform architectural facades into realistic urban landscapes."
            }
            githubLink={
              "https://github.com/chinmay13/Image-to-Image-Translation-using-CGAN"
            }
          />
          <Card
            key={3}
            imageSrc={project4}
            projectName={"NYC Crash Data Analysis"}
            description={
              "Executed a comprehensive project on NYC crash analytics, extracting insights through Python data analysis and visualization."
            }
            githubLink={"https://github.com/chinmay13/NY_Crash_Data_Analysis"}
          />
          <Card
            key={4}
            imageSrc={project5}
            projectName={"Instacart Market Basket Analysis"}
            description={
              "Executed an end-to-end big data analysis for Instacart, handling a vast dataset of 40 million records, and revealed pivotal insights through market basket analysis."
            }
            githubLink={
              "https://github.com/chinmay13/Instacart_Project_CSCI_620"
            }
          />
          <Card
            key={5}
            imageSrc={project6}
            projectName={"Doodle with AI"}
            description={
              "Fused ML5.js with ReactJS to empower AI-driven doodle completion, crafted an efficient UI with ReactJS, and implemented an interactive canvas for user doodling using Processing's P5 library."
            }
            githubLink={"https://github.com/chinmay13/doodle-with-ai"}
          />
          <Card
            key={6}
            imageSrc={project3}
            projectName={"Todo List with Google Firebase"}
            description={
              "Created a streamlined Todo List application using ReactJS, featuring Google Firebase integration for authentication and storage functionalities.            "
            }
            githubLink={"https://github.com/chinmay13/Todo-List-App"}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
