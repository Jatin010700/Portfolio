import React from "react";
import Navbar from "./navbar";
import { TransitionEffect } from "./transitionEffect";
import { Link } from "react-router-dom";
import { GithubIcon } from "./icon";
import { motion } from "framer-motion";
import { AnimatedText } from "./animateText";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-2xl border border-solid border-dark bg-white shadow-2xl p-10 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        to={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-cyan font-medium text-xl">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>{" "}
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <motion.div 
          whileHover={{ y: -2 }} 
          whileTap={{ scale: 0.9 }}
          className="w-10"
          >
            <Link to={github} target="_blank">
              <GithubIcon />
            </Link>
          </motion.div>
          <Link
            to={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-white p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-white hover:text-dark transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </div>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center rounded-2xl border border-solid border-dark bg-white p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        to={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-between mt-4">
        <span className="text-cyan font-medium text-xl">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>{" "}
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            to={link}
            target="_blank"
            className="rounded-lg bg-dark text-white p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-white hover:text-dark transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150"
          >
            Visit
          </Link>
          <motion.div 
          whileHover={{ y: -2 }} 
          whileTap={{ scale: 0.9 }}
          className="w-10"
          >
            <Link to={github} target="_blank">
              <GithubIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <>
      <Navbar />
      <TransitionEffect />
      <div className="w-full px-4 md:px-28 flex flex-col items-center justify-center text-dark">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 text-dark">
      <AnimatedText text="My Projects!" className="!m-0" />
        </h1>

        <div className="grid grid-cols-12 gap-6 md:gap-24">
          <div className="col-span-12">
            <FeaturedProject
              title="Car rental"
              img="assets/car rental.png"
              summary="
            The website feature a responsive and intuitive interface, allowing users to easily navigate through various search filters such as vehicle type, and price range."
              link="https://car-rental-front.onrender.com"
              github="https://github.com/Jatin010700/Final_Project_Front"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="My Portfolio"
              img="assets/Portfolio.png"
              summary="
              Coming Soon ..."
              link="https://portfolio-0hmq.onrender.com"
              github="https://github.com/Jatin010700/Portfolio"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Mini Project"
              img="assets/Admin_Project.png"
              summary="
              Coming Soon ..."
              link="https://admin-car-rental.onrender.com"
              github="https://github.com/Jatin010700/Admin"
              type="Featured Project"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              title="Tech Shop"
              img="assets/shop.png"
              summary="A Simple E-Commerce 75% Complete"
              link="https://tech-shop-1r5c8ke4p-jatin010700.vercel.app"
              github="https://github.com/Jatin010700"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Coming Soon ..."
              img="assets/soon.png"
              summary="
              Coming Soon ..."
              link="/"
              github="https://github.com/Jatin010700"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Coming Soon ..."
              img="assets/soon.png"
              summary="
              Coming Soon ..."
              link="/"
              github="https://github.com/Jatin010700"
              type="Featured Project"
            />
          </div>
          <div>
        
          </div>
        </div>
      </div>
    </>
  );
};
