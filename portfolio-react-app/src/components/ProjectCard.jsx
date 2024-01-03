import React, { useState } from "react";
import "./Card.css";

function Card({ imageSrc, projectName, description, githubLink }) {
  const [isFlipped, setFlipped] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  const handleMouseEnter = () => {
    setFlipped(true);
    setTransitioning(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
    setTransitioning(true);
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-md card"
      style={{ display: "flex", flexFlow: "column", height: "16rem" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="card-inner">
        <div className={`card-front mb-auto`}>
          <img
            src={imageSrc}
            alt={projectName}
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl text-black font-semibold mb-2">
            {projectName}
          </h2>
        </div>
        <div
          className={`card-back flex mb-auto text-black items-center justify-center`}
        >
          {description}
        </div>
      </div>

      <div className="mt-auto">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          View on GitHub
        </a>
      </div>

      {/* <p className="text-gray-600">{description}</p> */}
    </div>
  );
}

export default Card;
