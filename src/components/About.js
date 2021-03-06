import React from "react";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <div className="about">
      <h2>Surfspot Group Project - Group 5</h2>
      <div
        onClick={() =>
          window.open("https://github.com/Tinob-92/surftrip", "_blank")
        }
        className="about-link"
      >
        <AiFillGithub className="github-icon" />
        <p>See code on GitHub</p>
      </div>
    </div>
  );
};

export default About;
