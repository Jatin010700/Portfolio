import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "./animateText";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold bg-dark text-white p-8 shadow cursor-pointer absolute py-3 px-6"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark">
      <AnimatedText text="Skills" className="!m-0" />
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark text-white p-8 shadow"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skills name="CSS" x="-5vw" y="-10vw" />
        <Skills name="HTML" x="-5vw" y="-5vw" />
        <Skills name="JavaScript" x="-20vw" y="-10vw" />
        <Skills name="Databases" x="30vw" y="-15vw" />
        <Skills name="Tailwind CSS" x="15vw" y="-10vw" />
        <Skills name="Node JS" x="-5vw" y="10vw" />
        <Skills name="React" x="-20vw" y="5vw" />
        <Skills name="Redux" x="-30vw" y="5vw" />
        <Skills name="Next JS" x="20vw" y="5vw" />
        <Skills name="BootStrap" x="30vw" y="-5vw" />
      </div>
    </>
  );
};
