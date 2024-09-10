import React from "react";
import icon from "../assets/logo-arch.png";
import Button from "../layout/Button";

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between md:px-32 px-5 p-4 m-2 ">
      <div className="flex flex-row items-center gap-12 text-lightText p-2">
        <div>
          <img src={icon} alt="logo" className="h-[41px] w-[81px]" />
        </div>
        <nav className=" hidden md:flex gap-4 ">
          <a className=" hover:text-aquamarine transition-all " href="/works">
            How it Works
          </a>
          <a className=" hover:text-aquamarine transition-all " href="/gallery">
            Design Gallery
          </a>
          <a
            className=" hover:text-aquamarine transition-all "
            href="/Architects"
          >
            Architects
          </a>
          <a
            className=" hover:text-aquamarine transition-all "
            href="/Articles"
          >
            Articles
          </a>
        </nav>
      </div>

      <div className=" flex flex-row items-center p-2 gap-4 ">
        <a href="/signIn">Sign In</a>
      </div>
      <Button title="Sign Up" />
    </div>
  );
};

export default Navbar;
