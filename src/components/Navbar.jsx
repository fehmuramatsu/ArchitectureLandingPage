import React from "react";
import icon from "../assets/logo-arch.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between md:px-32 p-4 m-2">
      <div>
        <img src={icon} alt="logo" />
      </div>
      <nav className="flex gap-4">
        <a href="/works">How it Works</a>
        <a href="/gallery">Design Gallery</a>
        <a href="/Architects">Architects</a>
        <a href="/Articles">Articles</a>
      </nav>
      <div>
        <a href="/signIn">Sign In</a>
        <button className="">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
