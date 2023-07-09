import { Link } from "react-router-dom";
import React from "react";
import { LinkArrow } from "./icon";

export default function Header() {
  return (
    <div className="w-full h-full inline-block z-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="assets/Profilepic1.png"
            alt=""
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold text-dark">Jatin Oomajee</h1>
          <p className="p-2 text-2xl text-cyan">I'm a Full Stack JS Developer</p>
          <p className="text-justify w-full md:w-3/4 p-2">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects,
            showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2">
            <a href="assets/CV.jpg"
              target="_blank"
              className="flex items-center bg-dark text-white p-2.5 px-6 rounded-2xl text-lg font-bold border-transparent border-2 hover:border-dark hover:bg-white hover:text-dark transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
            >
              Resume <LinkArrow className="w-6 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
