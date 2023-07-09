import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import { TransitionEffect } from "./transitionEffect";

export const Home = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <Header />
    </>
  );
};
