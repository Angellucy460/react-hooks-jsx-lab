import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about"> 
    <h2>About Me</h2>
    <p>Hi, I am Angel, a full stack website developer with a passion for building responsive, user-friendly web applications from the ground up. I specialize in both front-end technologies like React and HTML/CSS, and back-end frameworks like Node.js and Express. I love turning ideas into interactive experiences that drive real impact.</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
