import React from "react";
import { useState } from "react";
import { GithubIcon, LinkedInIcon } from "./icon";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CustomLink = ({ to, title, className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={to}
      className={`${className} relative group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block rounded-full bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-400
      ${isHovered ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 py-8 md:px-32 flex flex-col md:flex-row items-center justify-between">
      <nav className="hidden md:flex md:items-center md:justify-center w-full md:w-auto mb-4 md:mb-0">
        <CustomLink to="/" title="Home" className="mr-4 font-bold" />
        <CustomLink to="/about" title="About" className="mx-4 font-bold" />
        <CustomLink to="/project" title="Projects" className="mx-4 font-bold" />
        <CustomLink to="/contact" title="Contact" className="ml-4 font-bold" />
      </nav>

      <div className="md:hidden">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-0 right-0 h-42 flex flex-col items-center mt-20 mr-14 z-50  rounded-2xl text-white bg-dark w-64 p-4"
          >
            <CustomLink
              to="/"
              title="Home"
              className="mb-4 font-bold"
              onClick={toggleMenu}
            />
            <CustomLink
              to="/about"
              title="About"
              className="mb-4 font-bold"
              onClick={toggleMenu}
            />
            <CustomLink
              to="/project"
              title="Projects"
              className="mb-4 font-bold"
              onClick={toggleMenu}
            />
            <CustomLink
              to="/contact"
              title="Contact"
              className="font-bold"
              onClick={toggleMenu}
            />
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className="hidden md:flex md:items-center md:justify-center">
        <motion.a
          href="https://github.com/Jatin010700"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/feed/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
    </div>
  );
}
