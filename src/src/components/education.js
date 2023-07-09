import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { CircleIcon } from "./circleIcon";

const Details = ({ position, company, time, work, address }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[50%] mx-auto flex flex-col items-center justify-between"
    >
      <CircleIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp; | <span className="text-cyan">{company}@</span>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
        <h1 className="font-bold text-4xl md:text-8xl mb-10 md:mb-32 w-full text-center">
        Education
      </h1>
      <div ref={ref} className="w-[75%] rounded-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark rounded-full origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Student"
            company="Developers Institute"
            time="April - June 2023"
            address="Port-Louis, Mauritius"
            work="JavaScript Bootcamp course include HTML | CSS | JS | Database | Node.JS | React | Redux"
          />
          <Details
            position="Student"
            company="HRDC "
            time="3 month"
            address="University of Mauritius, Reduit"
            work="Graphic design, 3D design and Web Development include Adobe ( Illustrator, PhotoShop, AfterEffect, Maya ) | Maya ( 3D ) | HTML | CSS | JS"
          />

          <Details
            position="Student"
            company="Sir Abdool Raman Osman College"
            time="Form 1 - Form 5 "
            address="Phoenix, Mauritius"
            work=""
          />
        </ul>
      </div>
    </div>
  );
};
