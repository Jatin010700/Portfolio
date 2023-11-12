import React from "react";
import Navbar from "./navbar";

import { TransitionEffect } from "./transitionEffect";
import { Projects } from "./project";

export const Home = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <Projects/>
    </>
  );
};
