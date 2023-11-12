import React from "react";
import Navbar from "./navbar";
import { TransitionEffect } from "./transitionEffect";
import { Skill } from "./skill";
import { Experience } from "./experience";
import { Education } from "./education";
import { AnimatedText } from "./animateText";

export const About = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 text-dark">
        <AnimatedText text="About Me!" className="!m-0" />
          </h1>
        <div className="px-6 py-6 md:p-10 lg:px-16 lg:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <h2 className="mb-4 text-lg md:text-xl font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Jatin Oomajee, a Recent Graduate full stack JS developer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="my-4 font-medium">
                Whether I'm working on a website or mobile app, I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to
                bring my skills and passion to your next project.
              </p>
            </div>

            <div className="relative w-5/6  rounded-2xl border-2 border-solid border-dark bg-white p-8">
              <div className="absolute top-1 -right-3 -z-10 w-[101%] h-[102%] rounded-2xl bg-dark" />
              <img
                src="assets/Profilepic1.png"
                alt=""
                className="h-96 rounded-2xl bg-dark"
              />
            </div>

            
          </div>
        </div>
      </div>
      <Skill />
      <Experience />
      <Education />
    </>
  );
};
