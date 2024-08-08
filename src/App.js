import React from "react";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
    </>
  );
};

export default App;
