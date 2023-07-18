import React from "react";
import { TransitionEffect } from "./transitionEffect";
import Navbar from "./navbar";
import { AnimatedText } from "./animateText";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <TransitionEffect />
      <div className="w-full px-28 flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl md:text-8xl mb-10 md:mb-32 w-full text-center text-dark">
      <AnimatedText text="Get in Touch!" className="" />
      </h1>
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-white p-8">
          <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[105%] rounded-[1rem] bg-dark" />
         <p className="w-full h-auto rounded-2xl"><span className="font-bold text-cyan text-2xl">Email:</span> jatin.oomajee41@gmail.com</p>
         <p><span className="font-bold text-cyan text-2xl">Phone/Whatapps:</span> 55012299</p>
        </div>
      </div>

    </>
  );
};
