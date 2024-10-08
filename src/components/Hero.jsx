import React from "react";
import img from "../assets/homeImg.svg";
import Button from "../layout/Button";

const Hero = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2 ">
      <div className=" md:w-3/5 ">
        <h1 className=" text-8xl font-playFair font-semibold ">
          Build Your Dream <span className=" text-aquamarine ">House</span>
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row pt-8 ">
        <div className=" p-5 m-2 space-y-5 ">
          <p>
            100% guaranteed buid safe, comfortable and transparent with a
            project management for the best result
          </p>
          <Button title="FREE CONSULTATION" />
        </div>
        <div>
          <img className=" rounded-md " src={img} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
